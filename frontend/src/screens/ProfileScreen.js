import React from 'react'
import { Link } from 'react-router-dom'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { useSelector } from 'react-redux'

const ProfileScreen = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin
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

      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}

      <div className='section-title'>
        <h2>{userInfo.name}</h2>
      </div>
    </>
  )
}

export default ProfileScreen
