import React, { useState, useEffect } from 'react'
import { Link, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { listUsers } from '../actions/userActions'
import TeamMember from '../components/TeamMember'
import Message from '../components/Message'
import Loader from '../components/Loader'
import MemberSearch from '../components/MemberSearch'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AllMembersScreen = ({ history, match }) => {
  const keyword = match.params.keyword

  const dispatch = useDispatch()

  const [SuccesChange, setSuccesChange] = useState(false)

  const userList = useSelector((state) => state.userList)
  const { loading, error, users } = userList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdate = useSelector((state) => state.userUpdate)
  const { success } = userUpdate

  const actualUserId = userInfo._id

  useEffect(() => {
    if (userInfo) {
      dispatch(listUsers(keyword))
    } else {
      history.push('/login')
    }

    setSuccesChange(success)
    if (SuccesChange) {
      toast.info('✔Request Sent Successfully!!')
      setSuccesChange(false)
    }
  }, [dispatch, history, userInfo, success, keyword])
  return (
    <>
      {/* <!-- ======= Breadcrumbs ======= --> */}
      <section id='breadcrumbs' className='breadcrumbs'>
        <div className='container'>
          <div className='d-flex justify-content-between align-items-center'>
            <h2>Members</h2>
            <div className='row justify-content-center'>
              <Route
                render={({ history }) => <MemberSearch history={history} />}
              />
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
            {!keyword ? (
              <h2>All Members</h2>
            ) : (
              <h2>Search Result for "{keyword}"</h2>
            )}
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
      <ToastContainer />
    </>
  )
}

export default AllMembersScreen
