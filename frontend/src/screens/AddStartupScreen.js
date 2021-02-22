import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { createStartup } from '../actions/startupActions'
import { updateUserProfile } from '../actions/userActions'

const EditStartupScreen = ({ history }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [platform, setPlatform] = useState('')
  const [specification, setSpecification] = useState('')
  const [type, setType] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const startupCreate = useSelector((state) => state.startupCreate)
  const { loading, error, success } = startupCreate

  useEffect(() => {
    if (success) {
      history.push('/profile')
    }
  }, [success])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      createStartup({ name, description, platform, specification, type })
    )
  }
  return (
    <>
      <section id='breadcrumbs' className='breadcrumbs'>
        <div className='container'>
          <div className='d-flex justify-content-between align-items-center'>
            <h2>Edit StartUp</h2>
            <ol>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>Edit StartUp</li>
            </ol>
          </div>
        </div>
      </section>

      <section id='contact' className='contact' data-aos='fade-up'>
        <div className='section-title'>
          <h2>Edit StartUp</h2>
        </div>

        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-7'>
              <form className='php-email-form' onSubmit={submitHandler}>
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader />}
                <div className='row'>
                  <div className=' form-group mt-2'>
                    <div className=' form-group'>
                      <i className='fas fa-keyboard m-2 icon' />
                      <strong>StartUp Name</strong>
                    </div>
                    <input
                      type='text'
                      name='name'
                      className='form-control'
                      placeholder='Enter Name*'
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className=' form-group mt-2'>
                    <div className=' form-group'>
                      <i className='fas fa-keyboard m-2 icon' />
                      <strong>StartUp Description</strong>
                    </div>
                    <input
                      type='text'
                      name='description'
                      className='form-control'
                      placeholder='Enter Description*'
                      required
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>

                  <div className='form-group mt-2'>
                    <div className=' form-group'>
                      <i className='fas fa-keyboard m-2 icon' />
                      <strong>Platform</strong>
                    </div>
                    <input
                      type='text'
                      name='platform'
                      className='form-control'
                      placeholder='Enter Platform*'
                      required
                      value={platform}
                      onChange={(e) => setPlatform(e.target.value)}
                    />
                  </div>
                  <div className='form-group mt-2'>
                    <div className=' form-group'>
                      <i className='fas fa-keyboard m-2 icon' />
                      <strong>Required Specifications</strong>
                    </div>
                    <input
                      type='text'
                      name='specification'
                      className='form-control'
                      placeholder='Enter Required Specifications*'
                      required
                      value={specification}
                      onChange={(e) => setSpecification(e.target.value)}
                    />
                  </div>
                  <div className=' form-group mt-2 '>
                    <div className=' form-group'>
                      <i className='fas fa-keyboard m-2 icon' />
                      <strong>Company Type</strong>
                    </div>
                    <div className='radio-container'>
                      <input
                        type='radio'
                        id='pvt'
                        name='role'
                        value='Pvt.Ltd'
                        onChange={(e) => setType(e.target.value)}
                      />
                      <label htmlFor='pvt'>Pvt.Ltd</label>

                      <input
                        type='radio'
                        id='ltd'
                        name='role'
                        value='Ltd'
                        onChange={(e) => setType(e.target.value)}
                      />
                      <label htmlFor='ltd'>Ltd</label>
                    </div>
                  </div>
                </div>

                <div className='text-center my-3'>
                  <button type='submit'>Add StartUp</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default EditStartupScreen
