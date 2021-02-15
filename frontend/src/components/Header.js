import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <>
      {/* <!-- ======= Header ======= --> */}
      <header id='header' className='fixed-top'>
        <div className='container d-flex align-items-center'>
          <h1 className='logo me-auto'>
            <Link to='/'>
              <span>Com</span>pany
            </Link>
          </h1>

          <nav id='navbar' className='navbar order-last order-lg-0'>
            <ul>
              <li>
                <Link to='/' className='active'>
                  Home
                </Link>
              </li>

              <li className='dropdown'>
                <Link>
                  <span>About</span> <i className='bi bi-chevron-down'></i>
                </Link>
                <ul>
                  <li>
                    <Link to='/about'>About Us</Link>
                  </li>
                  <li>
                    <Link to='/team'>Team</Link>
                  </li>
                  <li>
                    <Link to='/testimonials'>Testimonials</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to='/services'>Services</Link>
              </li>

              <li>
                <Link to='/pricing'>Pricing</Link>
              </li>

              <li>
                <Link to='/contact'>Contact</Link>
              </li>

              {userInfo ? (
                <li className='dropdown'>
                  <Link>
                    <span>{userInfo.name}</span>
                    <i className='bi bi-chevron-down'></i>
                  </Link>
                  <ul>
                    <li>
                      <Link to='/profile'>Profile</Link>
                    </li>
                    <li>
                      <Link onClick={logoutHandler}>Logout</Link>
                    </li>
                  </ul>
                </li>
              ) : (
                <li>
                  <Link to='/signin'>Sign-In</Link>
                </li>
              )}
            </ul>
            <i className='bi bi-list mobile-nav-toggle'></i>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header

/* <div className='box'>
<div className='btn-wrap '>
  <Link to='/signin'>Sign-In</Link>
</div>
</div> */
