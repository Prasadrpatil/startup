import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <div>
      <Spinner
        animation='border'
        role='status'
        style={{
          width: '60px',
          height: '60px',
          margin: 'auto',
          display: 'block',
          color: '#2ae149',
        }}
      ></Spinner>
    </div>
  )
}

export default Loader
