import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { listUsers } from '../actions/userActions'
import TeamMember from '../components/TeamMember'
import Message from '../components/Message'
import Loader from '../components/Loader'

const AllMembersScreen = ({ history }) => {
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
            <h2>Members</h2>
            <div className='row justify-content-center'>
              <div className='input-group'>
                <div className='form-outline'>
                  <input type='search' id='form1' className='form-control' />
                </div>
                <button type='button' className='btn btn-primary'>
                  <i className='fas fa-search'></i>
                </button>
              </div>
            </div>
            <ol>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>Members</li>
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
            <h2>All Members</h2>
          </div>

          <div className='row'>
            {users &&
              users.map((user) => (
                <TeamMember
                  key={user._id}
                  user={user}
                  actualUserId={actualUserId}
                />
              ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default AllMembersScreen
