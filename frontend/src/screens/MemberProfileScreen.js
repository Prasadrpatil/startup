import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails } from '../actions/userActions'

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
  }, [])
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

      <div className='section-title' data-aos='fade-up'>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        {user && <h2>{user.name}</h2>}
      </div>
    </>
  )
}

export default MemberProfileScreen
