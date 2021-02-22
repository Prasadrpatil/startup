import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { login } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'

const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  useEffect(() => {
    if (userInfo) {
      history.push('/profile')
    }
  }, [history, userInfo])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }
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
            <div className='col-lg-7'>
              <form className='php-email-form' onSubmit={submitHandler}>
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader />}
                <div className='row'>
                  <div className=' form-group mt-2 '>
                    <div className=' form-group'>
                      <i className='fas fa-envelope m-2 icon' />
                      <strong>E-mail</strong>
                    </div>
                    <input
                      type='email'
                      className='form-control'
                      name='email'
                      placeholder='Your Email*'
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className='form-group mt-2'>
                    <div className=' form-group'>
                      <i className='fas fa-lock m-2 icon' />
                      <strong>Password</strong>
                    </div>
                    <input
                      type='password'
                      name='password'
                      className='form-control'
                      id='password'
                      placeholder='Your Password*'
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                <div className='text-center my-3'>
                  <button type='submit'>Sign-In</button>
                </div>
                <div className='text-center mt-3 my-3'>
                  New here? <Link to='/signup'> Sign-Up</Link> first
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
