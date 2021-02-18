import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { register } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'

const RegisterScreen = ({ location, history }) => {
  const role = location.search ? location.search.split('=')[1] : null

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error } = userRegister

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo) {
      history.push('/profile')
    }
  }, [history, userInfo])

  const submitHandler = (e) => {
    e.preventDefault()

    dispatch(register(name, email, password, confirmPassword, role))
  }

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
              <li>{role}</li>
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
              <form className='php-email-form' onSubmit={submitHandler}>
                {message && <Message variant='danger'>{message}</Message>}
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader />}
                <div className='row'>
                  <div className=' form-group mt-3 '>
                    <div className=' form-group'>Name</div>
                    <input
                      type='name'
                      name='name'
                      className='form-control'
                      placeholder='Your Name'
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className=' form-group mt-3 '>
                    <div className=' form-group'>E-mail</div>
                    <input
                      type='email'
                      name='email'
                      className='form-control'
                      placeholder='Your Email'
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className='form-group mt-3'>
                    <div className=' form-group'>Password</div>
                    <input
                      type='password'
                      name='password'
                      className='form-control'
                      placeholder='Your Password'
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className='form-group mt-3'>
                    <div className=' form-group'>Confirm Password</div>
                    <input
                      type='password'
                      name='confirmPassword'
                      className='form-control'
                      placeholder='Confirm Password'
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>

                <div className='text-center my-3'>
                  <button type='submit'>Sign-Up</button>
                </div>
                <div className='text-center mt-3 my-3'>
                  Already have an Account? <Link to='/signin'>Sign-In</Link>
                  here
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
