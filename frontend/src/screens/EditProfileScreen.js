import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'

const EditProfileScreen = ({ history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [description, setDescription] = useState('')
  const [expertise, setExpertise] = useState('')
  const [experience, setExperience] = useState('')
  const [toolKit1, setToolKit1] = useState('')
  const [toolKit2, setToolKit2] = useState('')
  const [toolKit3, setToolKit3] = useState('')
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
      dispatch(
        updateUserProfile({
          id: user._id,
          name,
          email,
          password,
          description,
          expertise,
          experience,
          toolKit1,
          toolKit2,
          toolKit3,
        })
      )
    }
  }

  return (
    <>
      <section id='breadcrumbs' className='breadcrumbs'>
        <div className='container'>
          <div className='d-flex justify-content-between align-items-center'>
            <h2>Edit Profile</h2>
            <ol>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>Edit Profile</li>
              <li>
                <Link to='/profile'>Profile</Link>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section id='contact' className='contact' data-aos='fade-up'>
        <div className='section-title'>
          <h2>Edit Profile</h2>
        </div>

        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-7'>
              <form className='php-email-form' onSubmit={submitHandler}>
                {message && <Message variant='danger'>{message}</Message>}
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader />}
                <div className='row'>
                  <div className=' form-group mt-2'>
                    <div className=' form-group'>
                      <i className='fas fa-user m-2 icon' />
                      <strong>Name</strong>
                    </div>
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

                  <div className=' form-group mt-2'>
                    <div className=' form-group'>
                      <i className='fas fa-envelope m-2 icon' />
                      <strong>E-mail</strong>
                    </div>
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
                  <div className='form-group mt-2'>
                    <div className=' form-group'>
                      <i className='fas fa-lock m-2 icon' />
                      <strong>Password</strong>
                    </div>
                    <input
                      type='password'
                      name='password'
                      className='form-control'
                      placeholder='Your Password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className='form-group mt-2'>
                    <div className=' form-group'>
                      <i className='fas fa-lock m-2 icon' />
                      <strong>Confirm Password</strong>
                    </div>
                    <input
                      type='password'
                      name='confirmPassword'
                      className='form-control'
                      placeholder='Confirm Password'
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>

                  <div className='form-group mt-2'>
                    <div className=' form-group'>
                      <i className='fas fa-keyboard m-2 icon' />
                      <strong>Description</strong>
                    </div>
                    <input
                      type='text'
                      name='description'
                      className='form-control'
                      placeholder='Enter Description'
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>

                  <div className='form-group mt-2'>
                    <div className=' form-group'>
                      <i className='fas fa-keyboard m-2 icon' />
                      <strong>Expertise</strong>
                    </div>
                    <input
                      type='text'
                      name='expertise'
                      className='form-control'
                      placeholder='Enter Expertise'
                      value={expertise}
                      onChange={(e) => setExpertise(e.target.value)}
                    />
                  </div>

                  <div className='form-group mt-2'>
                    <div className=' form-group'>
                      <i className='fas fa-keyboard m-2 icon' />
                      <strong>Experience</strong>
                    </div>
                    <input
                      type='text'
                      name='experience'
                      className='form-control'
                      placeholder='Enter Experience'
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                    />
                  </div>

                  <div className='form-group mt-2'>
                    <div className=' form-group'>
                      <i className='fas fa-keyboard m-2 icon' />
                      <strong>Tool Kit 1</strong>
                    </div>
                    <input
                      type='text'
                      name='toolKit1'
                      className='form-control'
                      placeholder='Enter Tool Kit 1'
                      value={toolKit1}
                      onChange={(e) => setToolKit1(e.target.value)}
                    />
                  </div>

                  <div className='form-group mt-2'>
                    <div className=' form-group'>
                      <i className='fas fa-keyboard m-2 icon' />
                      <strong>Tool Kit 2</strong>
                    </div>
                    <input
                      type='text'
                      name='toolKit2'
                      className='form-control'
                      placeholder='Enter Tool Kit 2'
                      value={toolKit2}
                      onChange={(e) => setToolKit2(e.target.value)}
                    />
                  </div>

                  <div className='form-group mt-2'>
                    <div className=' form-group'>
                      <i className='fas fa-keyboard m-2 icon' />
                      <strong>Tool Kit 3</strong>
                    </div>
                    <input
                      type='text'
                      name='toolKit3'
                      className='form-control'
                      placeholder='Enter Tool Kit 3'
                      value={toolKit3}
                      onChange={(e) => setToolKit3(e.target.value)}
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
    </>
  )
}

export default EditProfileScreen
