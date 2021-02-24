import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Request from '../components/Request'
import { listStartupDetails, updateStartup } from '../actions/startupActions'
import { updateUser } from '../actions/userActions'

import { useDispatch, useSelector } from 'react-redux'

const RequestScreen = ({ history }) => {
  const dispatch = useDispatch()

  const startupDetails = useSelector((state) => state.startupDetails)
  const { startup } = startupDetails

  const startupUpdate = useSelector((state) => state.startupUpdate)
  const { success } = startupUpdate

  const userDetails = useSelector((state) => state.userDetails)
  const { user } = userDetails

  const startupId = user.requestId
  useEffect(() => {
    dispatch(listStartupDetails(startupId))

    if (user.startupId) {
      history.push('/profile')
    }
  }, [dispatch, startupId, success])

  const submitHandler = () => {
    dispatch(updateStartup({ _id: startupId, user }))
    dispatch(
      updateUser({
        id: user._id,
        startupId: startupId,
      })
    )
  }
  return (
    <>
      <section id='breadcrumbs' className='breadcrumbs'>
        <div className='container'>
          <div className='d-flex justify-content-between align-items-center'>
            <h2>Requests</h2>
            <ol>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>Requests</li>
            </ol>
          </div>
        </div>
      </section>

      <section id='contact' className='contact' data-aos='fade-up'>
        <div className='section-title'>
          <h2>Requests</h2>
        </div>

        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-10'>
              <form className='php-email-form'>
                <div className='row'>
                  <div className=' form-group mt-2'>
                    <div className=' form-group'></div>
                    <Request variant='success'>
                      You Have Been Invited to <strong>{startup?.name} </strong>
                      <button className='buttonAny' onClick={submitHandler}>
                        Accept
                      </button>
                    </Request>
                    <strong>Message:</strong>
                    <p>{user.requestMessage}</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default RequestScreen
