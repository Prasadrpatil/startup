import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails } from '../actions/userActions'
import { Image } from 'react-bootstrap'

const MemberProfileScreen = ({ history, match }) => {
  const userId = match.params.memberId

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  useEffect(() => {
    if (userInfo) {
      dispatch(getUserDetails(userId))
    } else {
      history.push('/login')
    }
  }, [dispatch, history, userInfo, userId])
  return (
    <>
      {/* <!-- ======= Breadcrumbs ======= --> */}
      <section id='breadcrumbs' className='breadcrumbs'>
        <div className='container'>
          <div className='d-flex justify-content-between align-items-center'>
            <h2>{user.name}</h2>
            <ol>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>Member</li>
              <li>{user.name}</li>
            </ol>
          </div>
        </div>
      </section>

      <section id='about-us' className='about-us'>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <div className='container' data-aos='fade-up'>
          <div className='row content'>
            <div className='col-lg-4' data-aos='fade-right'>
              <div className='row '>
                <div className='col-lg-9'>
                  <div className='section-title'>
                    <Image src={user?.image} roundedCircle fluid />
                  </div>

                  <div className='section-title'>
                    <div className='member-info mt-2'>
                      <h4>{user?.name}</h4>

                      {user?.role === 'leader' ? (
                        <span>Team Leader</span>
                      ) : user?.role === 'member' ? (
                        <span>Team Member</span>
                      ) : user?.role === 'mentor' ? (
                        <span>Mentor</span>
                      ) : null}

                      <div className='social-links text-center text-md-right pt-3 mt-3 pt-md-0'>
                        <Link to='/profile' className='twitter'>
                          <i className='bx bxl-twitter'></i>
                        </Link>
                        <Link to='/profile' className='facebook'>
                          <i className='bx bxl-facebook'></i>
                        </Link>
                        <Link to='/profile' className='instagram'>
                          <i className='bx bxl-instagram'></i>
                        </Link>
                        <Link to='/profile' className='google-plus'>
                          <i className='bx bxl-skype'></i>
                        </Link>
                        <Link to='/profile' className='linkedin'>
                          <i className='bx bxl-linkedin'></i>
                        </Link>
                      </div>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-8 pt-4 pt-lg-0' data-aos='fade-left'>
              <div className='container'>
                <h3>Description: </h3>
                <p>{user?.description}</p>

                <h3>Expertise: </h3>
                <p>{user?.expertise}</p>

                <h3>Experience: </h3>
                <p>{user?.experience}</p>

                <h3>Tool Kit: </h3>
                {user?.toolKit1 && (
                  <span className='tech'>{user.toolKit1}</span>
                )}
                {user?.toolKit2 && (
                  <span className='tech'>{user.toolKit2}</span>
                )}
                {user?.toolKit3 && (
                  <span className='tech'>{user.toolKit3}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    
    </>
  )
}

export default MemberProfileScreen
