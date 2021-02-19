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

  const editHandler = () => {
    history.push('/editprofile')
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
        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <div className='container' data-aos='fade-up'>
          <div className='row content'>
            <div className='col-lg-4' data-aos='fade-right'>
              <div className='row '>
                <div className='col-lg-9'>
                  <Image src='assets/img/team/team-1.jpg' roundedCircle fluid />

                  <div className='section-title'>
                    <div className='member-info mt-2'>
                      <h4>{user.name}</h4>
                    </div>
                    <button className='buttonAny mt-2 ' onClick={editHandler}>
                      Edit Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-8 pt-4 pt-lg-0' data-aos='fade-left'>
              {user.isLeader ? (
                <button className='buttonAny m-3'>Overview</button>
              ) : user.role === 'mentor' ? (
                <button className='buttonAny m-3'>Overview</button>
              ) : user.role === 'member' ? (
                <div>
                  <button className='buttonAny m-3'>Overview</button>
                  <button className='buttonAny m-3' onClick={createTeamHandler}>
                    Create Team
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProfileScreen
