import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'

const ProfileScreen = ({ history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile

  useEffect(() => {
    if (!user || !user.name || success) {
      dispatch({ type: USER_UPDATE_PROFILE_RESET })
      dispatch(getUserDetails('profile'))
    } else {
      setName(user.name)
      setEmail(user.email)
    }
  }, [dispatch, history, userInfo, user, success])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not Match')
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }))
    }
  }

  const createTeamHandler = () => {
    const isLeader = true
    dispatch(
      updateUserProfile({
        id: user._id,
        name,
        email,
        password,
        isLeader: isLeader,
      })
    )
  }

  return (
    <>
      <section id='breadcrumbs' className='breadcrumbs'>
        <div className='container'>
          <div className='d-flex justify-content-between align-items-center'>
            <h2>Profile</h2>
            <ol>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>Profile</li>
            </ol>
          </div>
        </div>
      </section>

      <section id='about-us' className='about-us'>
        <div className='container' data-aos='fade-up'>
          <div className='row content'>
            <div className='col-lg-6' data-aos='fade-right'>
              <div className='row justify-content-center'>
                <div className='col-lg-2'>
                  <Image src='assets/img/team/team-1.jpg' roundedCircle fluid />
                  <div className='section-title'>
                    <button className='buttonAny mt-2 '>Edit</button>
                  </div>
                </div>

                <div className='container mt-1'>
                  <div className='row justify-content-center'>
                    <div className='col-lg-9'>
                      <form className='php-email-form' onSubmit={submitHandler}>
                        {message && (
                          <Message variant='danger'>{message}</Message>
                        )}
                        {error && <Message variant='danger'>{error}</Message>}
                        {loading && <Loader />}
                      </form>
                    </div>
                  </div>
                </div>

                <section id='contact' className='contact' data-aos='fade-up'>
                  <div className='container'>
                    <div className='row justify-content-center'>
                      <div className='col-lg-10'>
                        <form
                          className='php-email-form'
                          onSubmit={submitHandler}
                        >
                          <div className='row'>
                            <div className=' form-group mt-3 '>
                              <div className=' form-group'>Name</div>
                              <input
                                type='name'
                                name='name'
                                className='form-control'
                                placeholder='Your Name'
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                              />
                            </div>
                            <div className=' form-group mt-3 '>
                              <div className=' form-group'>E-mail</div>
                              <input
                                type='email'
                                name='email'
                                className='form-control'
                                placeholder='Your Email'
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>
                            <div className='form-group mt-3'>
                              <div className=' form-group'>Password</div>
                              <input
                                type='password'
                                name='password'
                                className='form-control'
                                placeholder='Your Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                              />
                            </div>
                            <div className='form-group mt-3'>
                              <div className=' form-group'>
                                Confirm Password
                              </div>
                              <input
                                type='password'
                                name='confirmPassword'
                                className='form-control'
                                placeholder='Confirm Password'
                                value={confirmPassword}
                                onChange={(e) =>
                                  setConfirmPassword(e.target.value)
                                }
                              />
                            </div>
                          </div>

                          <div className='text-center my-3'>
                            <button type='submit'>Update</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <div className='col-lg-6 pt-4 pt-lg-0' data-aos='fade-left'>
              {!user.isLeader ? (
                <button className='buttonAny' onClick={createTeamHandler}>
                  Create Team
                </button>
              ) : (
                <div>Team</div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProfileScreen
