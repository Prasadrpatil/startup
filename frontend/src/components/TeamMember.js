import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const User = ({ user, actualUserId }) => {
  return (
    <>
      {user._id != actualUserId && user.role === 'member' && (
        <div className='col-lg-3 col-md-6 d-flex align-items-stretch'>
          <div className='member' data-aos='fade-up'>
            <div className='member-img'>
              <img
                src='assets/img/team/team-1.jpg'
                className='img-fluid'
                alt=''
              />
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
              <h4>{user.name}</h4>
              <span>Chief Executive Officer</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default User