import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MessageModal from './MessageModal'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails } from '../actions/userActions'

const User = ({ user, actualUserId, history }) => {
  const [modalShow, setModalShow] = useState(false)

  const userDetails = useSelector((state) => state.userDetails)
  const { user: userDetail } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile

  const dispatch = useDispatch()

  useEffect(() => {
    if (userInfo) {
      dispatch(getUserDetails(user._id))
    } else {
      history.push('/login')
    }
  }, [dispatch, success, userInfo])

  return (
    <>
      {user._id !== actualUserId &&
        (user.role === 'member' || user.role === 'leader') && (
          <div className='col-lg-3 col-md-6 d-flex align-items-stretch'>
            <div className='member' data-aos='fade-up'>
              <div className='member-img'>
                <Link to={`/member/${user._id}`}>
                  <img src={user?.image} className='img-fluid' alt='' />
                </Link>

                <div className='social'>
                  <Link to='allmembers'>
                    <i className='bi bi-twitter'></i>
                  </Link>
                  <Link to='allmembers'>
                    <i className='bi bi-facebook'></i>
                  </Link>
                  <Link to='allmembers'>
                    <i className='bi bi-instagram'></i>
                  </Link>
                  <Link to='allmembers'>
                    <i className='bi bi-linkedin'></i>
                  </Link>
                </div>
              </div>
              <div className='member-info'>
                <Link to={`/member/${user._id}`}>
                  <h4>{user.name}</h4>
                </Link>
                <span>{user?.role}</span>

                {userInfo.role === 'leader' &&
                userInfo.startupId &&
                user.requestId ? (
                  <Link className='btn-get-started mt-2'>
                    Request Already Sent
                  </Link>
                ) : (
                  userInfo.role === 'leader' &&
                  userInfo.startupId &&
                  user.requestId === null && (
                    <Link
                      className='btn-get-started mt-2'
                      onClick={() => setModalShow(true)}
                    >
                      Send Request
                    </Link>
                  )
                )}

                <MessageModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  user={user}
                />
              </div>
            </div>
          </div>
        )}
    </>
  )
}

export default User
