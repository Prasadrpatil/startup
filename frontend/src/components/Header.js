import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout, getUserDetails } from '../actions/userActions'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userDetails = useSelector((state) => state.userDetails)
  const { user } = userDetails

  const logoutHandler = () => {
    dispatch(logout())
  }

  useEffect(() => {
    if (!user || !user.name) {
      dispatch({ type: USER_UPDATE_PROFILE_RESET })
      dispatch(getUserDetails('profile'))
    }
  }, [dispatch, userInfo, user])
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

              {userInfo && (
                <li className='dropdown'>
                  <Link to='/'>
                    <span>Browse More</span>
                    <i className='bi bi-chevron-down'></i>
                  </Link>
                  <ul>
                    <li>
                      <Link to='/allmembers'>Members</Link>
                    </li>
                    <li>
                      <Link to='/allmentors'>Mentors</Link>
                    </li>
                  </ul>
                </li>
              )}

              <li className='dropdown'>
                <Link to='/'>
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
                <Link to='/contact'>Contact</Link>
              </li>

              {userInfo ? (
                <li className='dropdown'>
                  <Link to='/'>
                    <span>{userInfo.name}</span>
                    <i className='bi bi-chevron-down'></i>
                  </Link>
                  <ul>
                    <li>
                      <Link to='/profile'>Profile</Link>
                    </li>
                    {user?.startupId ? (
                      <>
                        <li>
                          <Link to={`/startup/${user?.startupId}`}>
                            StartUp
                          </Link>
                        </li>
                      </>
                    ) : (
                      user?.requestId && (
                        <>
                          <li>
                            <Link to='/requests'>Requests</Link>
                          </li>
                        </>
                      )
                    )}
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
