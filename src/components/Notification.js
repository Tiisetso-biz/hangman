import React from 'react'

//display notification
const Notification = ({ showNotification }) => {
  return (
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p>Letter has been entered already</p>
    </div>
  )
}

export default Notification
