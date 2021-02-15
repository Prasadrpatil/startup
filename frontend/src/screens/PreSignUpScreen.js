import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const PreSignUpScreen = ({ history }) => {
  const submitHandlerMentor = () => {
    history.push('/signup?role=mentor')
  }
  const submitHandlerStudent = () => {
    history.push('/signup?role=student')
  }

  
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo) {
      history.push('/signin')
    }
  }, [history, userInfo])
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
                <div className='text-center my-2 section-title'>
                  <h4>How do you want to Proceed?</h4>
                </div>
                <div className='row'>
                  <div className=' form-group  col-md-6 form-group'>
                    <div className='text-center my-3'>
                      <button type='submit' onClick={submitHandlerMentor}>
                        Mentor
                      </button>
                    </div>
                  </div>
                  <div className=' form-group col-md-6 form-group'>
                    <div className='text-center my-3'>
                      <button type='submit' onClick={submitHandlerStudent}>
                        Student
                      </button>
                    </div>
                  </div>
                </div>

                <div className='text-center mt-3 my-3'>
                  Already have an Account? <Link to='/signin'>Sign-In</Link>{' '}
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

export default PreSignUpScreen
