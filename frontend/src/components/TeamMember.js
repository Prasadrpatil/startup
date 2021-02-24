import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails, updateUser } from '../actions/userActions'

const User = ({ user, actualUserId }) => {
  const [modalShow, setModalShow] = useState(false)
  const [message, setMessage] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userDetails = useSelector((state) => state.userDetails)
  const { user: loggedUser } = userDetails

  useEffect(() => {
    if (!loggedUser) {
      dispatch(getUserDetails('profile'))
    }
  }, [dispatch, loggedUser])

  const sendHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateUser({
        id: user._id,
        requestId: loggedUser.startupId,
        requestMessage: message,
      })
    )
  }

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header>
          <Modal.Title id='contained-modal-title-vcenter'>
            Send Request
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Message</h5>
          <Form>
            <Form.Group controlId='exampleForm.ControlTextarea1'>
              <Form.Control
                value={message}
                as='textarea'
                rows={3}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button onClick={sendHandler}>Send</Button>
        </Modal.Footer>
      </Modal>
    )
  }

  return (
    <>
      {user._id !== actualUserId &&
        (user.role === 'member' || user.role === 'leader') && (
          <div className='col-lg-3 col-md-6 d-flex align-items-stretch'>
            <div className='member' data-aos='fade-up'>
              <div className='member-img'>
                <Link to={`/member/${user._id}`}>
                  <img src={user?.image} className='img-fluid' alt='' />
                </Link>

                <div className='social'>
                  <Link to='allmembers'>
                    <i className='bi bi-twitter'></i>
                  </Link>
                  <Link to='allmembers'>
                    <i className='bi bi-facebook'></i>
                  </Link>
                  <Link to='allmembers'>
                    <i className='bi bi-instagram'></i>
                  </Link>
                  <Link to='allmembers'>
                    <i className='bi bi-linkedin'></i>
                  </Link>
                </div>
              </div>
              <div className='member-info'>
                <Link to={`/member/${user._id}`}>
                  <h4>{user.name}</h4>
                </Link>
                <span>Chief Executive Officer</span>

                {userInfo.role === 'leader' && (
                  <Link
                    className='btn-get-started mt-2'
                    onClick={() => setModalShow(true)}
                  >
                    Send Request
                  </Link>
                )}

                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </div>
          </div>
        )}
    </>
  )
}

export default User
