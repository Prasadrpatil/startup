import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { listUsers, deleteUser } from '../actions/userActions'
import Mentor from '../components/Mentor'
import Message from '../components/Message'
import Loader from '../components/Loader'
const AllMentorsScreen = ({ history }) => {
  const dispatch = useDispatch()

  const userList = useSelector((state) => state.userList)
  const { loading, error, users } = userList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const actualUserId = userInfo._id

  useEffect(() => {
    if (userInfo) {
      dispatch(listUsers())
    } else {
      history.push('/login')
    }
  }, [dispatch, history, userInfo])
  return (
    <>
      {/* <!-- ======= Breadcrumbs ======= --> */}
      <section id='breadcrumbs' className='breadcrumbs'>
        <div className='container'>
          <div className='d-flex justify-content-between align-items-center'>
            <h2>Mentors</h2>
            <ol>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>Mentors</li>
            </ol>
          </div>
        </div>
      </section>

      {/* <!-- ======= Our Team Section ======= --> */}
      <section id='team' className='team section-bg'>
        <div className='container'>
          {error && <Message variant='danger'>{error}</Message>}
          {loading && <Loader />}
          <div className='section-title' data-aos='fade-up'>
            <h2>All Mentors</h2>
          </div>

          <div className='row'>
            {users &&
              users.map((user) => (
                <Mentor user={user} actualUserId={actualUserId} />
              ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default AllMentorsScreen