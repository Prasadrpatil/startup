import React, { useState, useEffect } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../actions/userActions'

const MessageModal = (props) => {
  const [message, setMessage] = useState('')

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { user: loggedUser } = userDetails

  const sendHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateUser({
        id: props.user._id,
        requestId: loggedUser.startupId,
        requestMessage: message,
      })
    )
    props.onHide()
  }

  return (
    <>
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
    </>
  )
}

export default MessageModal
