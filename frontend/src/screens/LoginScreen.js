import React from 'react'
import { Link } from 'react-router-dom'

const LoginScreen = () => {
  return (
    <>
      <section id='breadcrumbs' className='breadcrumbs'>
        <div className='container'>
          <div className='d-flex justify-content-between align-items-center'>
            <h2>Sign-In</h2>
            <ol>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>Sign-In</li>
            </ol>
          </div>
        </div>
      </section>

      <section id='contact' className='contact' data-aos='fade-up'>
        <div className='section-title'>
          <h2>Sign-In</h2>
        </div>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-10'>
              <form className='php-email-form'>
                <div className='row'>
                  <div className=' form-group mt-3 '>
                    <div className=' form-group'>E-mail</div>
                    <input
                      type='email'
                      className='form-control'
                      name='email'
                      id='email'
                      placeholder='Your Email'
                      required
                    />
                  </div>
                  <div className='form-group mt-3'>
                    <div className=' form-group'>Password</div>
                    <input
                      type='password'
                      name='password'
                      className='form-control'
                      id='password'
                      placeholder='Your Password'
                      required
                    />
                  </div>
                </div>

                <div className='text-center my-3'>
                  <button type='submit'>Sign-In</button>
                </div>
                <div className='text-center mt-3 my-3'>
                  New here? <Link to='/register'>Sign-Up</Link> first
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LoginScreen
