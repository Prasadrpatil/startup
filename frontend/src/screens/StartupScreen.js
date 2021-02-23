import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { listStartupDetails } from '../actions/startupActions'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'

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
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className='row'>
            <div className='col-lg-3 col-md-6 d-flex align-items-stretch'>
              <div className='member' data-aos='fade-up'>
                <div className='member-img'>
                  <img
                    src='assets/img/team/team-1.jpg'
                    className='img-fluid'
                    alt=''
                  />
                  <div className='social'>
                    <Link to='/team'>
                      <i className='bi bi-twitter'></i>
                    </Link>
                    <Link to='/team'>
                      <i className='bi bi-facebook'></i>
                    </Link>
                    <Link to='/team'>
                      <i className='bi bi-instagram'></i>
                    </Link>
                    <Link to='/team'>
                      <i className='bi bi-linkedin'></i>
                    </Link>
                  </div>
                </div>
                <div className='member-info'>
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 d-flex align-items-stretch'>
              <div className='member' data-aos='fade-up' data-aos-delay='100'>
                <div className='member-img'>
                  <img
                    src='assets/img/team/team-2.jpg'
                    className='img-fluid'
                    alt=''
                  />
                  <div className='social'>
                    <Link to='/team'>
                      <i className='bi bi-twitter'></i>
                    </Link>
                    <Link to='/team'>
                      <i className='bi bi-facebook'></i>
                    </Link>
                    <Link to='/team'>
                      <i className='bi bi-instagram'></i>
                    </Link>
                    <Link to='/team'>
                      <i className='bi bi-linkedin'></i>
                    </Link>
                  </div>
                </div>
                <div className='member-info'>
                  <h4>Sarah Jhonson</h4>
                  <span>Product Manager</span>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 d-flex align-items-stretch'>
              <div className='member' data-aos='fade-up' data-aos-delay='200'>
                <div className='member-img'>
                  <img
                    src='assets/img/team/team-3.jpg'
                    className='img-fluid'
                    alt=''
                  />
                  <div className='social'>
                    <Link to='/team'>
                      <i className='bi bi-twitter'></i>
                    </Link>
                    <Link to='/team'>
                      <i className='bi bi-facebook'></i>
                    </Link>
                    <Link to='/team'>
                      <i className='bi bi-instagram'></i>
                    </Link>
                    <Link to='/team'>
                      <i className='bi bi-linkedin'></i>
                    </Link>
                  </div>
                </div>
                <div className='member-info'>
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 d-flex align-items-stretch'>
              <div className='member' data-aos='fade-up' data-aos-delay='300'>
                <div className='member-img'>
                  <img
                    src='assets/img/team/team-4.jpg'
                    className='img-fluid'
                    alt=''
                  />
                  <div className='social'>
                    <Link to='/team'>
                      <i className='bi bi-twitter'></i>
                    </Link>
                    <Link to='/team'>
                      <i className='bi bi-facebook'></i>
                    </Link>
                    <Link to='/team'>
                      <i className='bi bi-instagram'></i>
                    </Link>
                    <Link to='/team'>
                      <i className='bi bi-linkedin'></i>
                    </Link>
                  </div>
                </div>
                <div className='member-info'>
                  <h4>Amanda Jepson</h4>
                  <span>Accountant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default StartupScreen
