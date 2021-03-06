import React from 'react'
import useUser from '../../hooks/use-user'
import User from './user'
import Suggestions from './suggestions'

export default function Sidebar() {
  const {
    user: { fullname, username, userId }
  } = useUser()
  return (
    <div className="p-4">
      <User username={username} fullname={fullname} />
      <Suggestions />
    </div>
  )
}
