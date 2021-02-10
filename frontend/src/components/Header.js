import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
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
          <Link to='/' className='logo me-auto me-lg-0'>
            <img src='../assets/img/logo.png' alt='' className='img-fluid' />
          </Link>

          <nav id='navbar' className='navbar order-last order-lg-0'>
            <ul>
              <li>
                <Link to='/' className='active'>
                  Home
                </Link>
              </li>

              <li className='dropdown'>
                <Link to='/about'>
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
            </ul>
            <i className='bi bi-list mobile-nav-toggle'></i>
          </nav>

          <div className='header-social-links d-flex'>
            <div class='box'>
              <div class='btn-wrap'>
                <Link to='/login'>Sign-In</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
