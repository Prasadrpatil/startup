import React from 'react'
import { Link } from 'react-router-dom'

const Member = ({ user }) => {
  return (
    <>
      <div className='col-lg-3 col-md-6 d-flex align-items-stretch'>
        <div className='member' data-aos='fade-up'>
          <div className='member-img'>
            <img src={user?.image} className='img-fluid' alt='' />

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
            <span>{user.role}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Member
