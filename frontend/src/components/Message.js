import React, { useState } from 'react'

const Message = ({ variant, children }) => {
  const [timeOut, setTimeOut] = useState(false)

  setTimeout(() => {
    setTimeOut(true)
  }, 4000)

  return (
    timeOut !== true && (
      <div className={`alert alert-${variant}`}>{children}</div>
    )
  )
}

Message.defaultPros = {
  variant: 'info',
}

export default Message
