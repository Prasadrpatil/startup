import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { listStartupDetails } from '../actions/startupActions'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Member from '../components/Member'

const StartupScreen = ({ match, history }) => {
  const startupId = match.params.startupId
  const dispatch = useDispatch()

  const startupDetails = useSelector((state) => state.startupDetails)
  const { loading, error, startup } = startupDetails

  const userDetails = useSelector((state) => state.userDetails)
  const { user } = userDetails

  useEffect(() => {
    dispatch(listStartupDetails(startupId))
  }, [dispatch, match, startupId])
  return (
    <>
      <section id='breadcrumbs' className='breadcrumbs'>
        <div className='container'>
          <div className='d-flex justify-content-between align-items-center'>
            <h2>StartUp</h2>
            <ol>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>StartUp</li>
            </ol>
          </div>
        </div>
      </section>

      <section id='contact' className='contact'>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <div className='container' data-aos='fade-up'>
          <div className='row justify-content-center'>
            <div className='col-lg-10'>
              <div className='section-title' data-aos='fade-up'>
                <h2>StartUp</h2>
              </div>

              {user.role === 'leader' && (
                <Link
                  to={`/editstartup/${startup?._id}`}
                  className='btn-get-started'
                >
                  Edit StartUp
                </Link>
              )}

              <div className='row'>
                {startup && (
                  <>
                    <h3>StartUp Name: </h3>
                    <p>{startup.name}</p>
                    <h3>StartUp Description: </h3>
                    <p>{startup.description}</p>
                    <h3>Platform: </h3>
                    <p>{startup.platform}</p>
                    <h3>Required Specifications: </h3>
                    <p>{startup.specification}</p>
                    <h3>Company Type: </h3>
                    <p>{startup.type}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ======= Our Team Section ======= --> */}
      <section id='team' className='team section-bg'>
        <div className='container'>
          <div className='section-title' data-aos='fade-up'>
            <h2>
              Our <strong>Team</strong>
            </h2>
          </div>

          <div className='row'>
            {startup.team && startup.team.map((user) => <Member user={user} />)}
          </div>
        </div>
      </section>
    </>
  )
}

export default StartupScreen
