import React from 'react'
import { Link } from 'react-router-dom'

const RegisterScreen = () => {
  return (
    <>
      <section id='breadcrumbs' className='breadcrumbs'>
        <div className='container'>
          <div className='d-flex justify-content-between align-items-center'>
            <h2>Sign-Up</h2>
            <ol>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>Sign-Up</li>
            </ol>
          </div>
        </div>
      </section>

      <section id='contact' className='contact' data-aos='fade-up'>
        <div className='section-title'>
          <h2>Sign-Up</h2>
        </div>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-10'>
              <form className='php-email-form'>
                <div className='row'>
                  <div className=' form-group mt-3 '>
                    <div className=' form-group'>Name</div>
                    <input
                      type='name'
                      className='form-control'
                      name='name'
                      id='name'
                      placeholder='Your Name'
                      required
                    />
                  </div>
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
                  <div className='form-group mt-3'>
                    <div className=' form-group'>Confirm Password</div>
                    <input
                      type='password'
                      name='password'
                      className='form-control'
                      id='password'
                      placeholder='Confirm Password'
                      required
                    />
                  </div>
                </div>

                <div className='text-center my-3'>
                  <button type='submit'>Sign-Up</button>
                </div>
                <div className='text-center mt-3 my-3'>
                  Already have an Account? <Link to='/login'>Sign-In</Link> here
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default RegisterScreen
