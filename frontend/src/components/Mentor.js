import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MessageModal from './MessageModal'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails } from '../actions/userActions'

const Mentor = ({ user, actualUserId }) => {
  const [modalShow, setModalShow] = useState(false)

  const userDetails = useSelector((state) => state.userDetails)
  const { user: userDetail } = userDetails

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserDetails('profile'))
  }, [dispatch, success])

  return (
    <>
      {user._id !== actualUserId && user.role === 'mentor' && (
        <div className='col-lg-3 col-md-6 d-flex align-items-stretch'>
          <div className='member' data-aos='fade-up'>
            <div className='member-img'>
              <Link to={`/mentor/${user._id}`}>
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
              <Link to={`/mentor/${user._id}`}>
                <h4>{user.name}</h4>
              </Link>
              <span>Chief Executive Officer</span>
              {userDetail.role === 'leader' && (
                <Link
                  className='btn-get-started mt-2'
                  onClick={() => setModalShow(true)}
                >
                  Send Request
                </Link>
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

export default Mentor
