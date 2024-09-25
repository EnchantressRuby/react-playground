import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserProvider'

const MainUser = () => {
  const { users, changeWidth } = useContext(UserContext)

  return (
    <div>mainuser</div>
  )
}

export default MainUser