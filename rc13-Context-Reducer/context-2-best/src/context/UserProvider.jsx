import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'


//! 1- creating context
export const UserContext = createContext()

//! 2- Provider
const UserProvider = ({ children }) => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://api.github.com/users")
    .then((res) => res.json())
    .then((dat) =>setUsers(dat))
  },[])


  return (
    <UserContext.Provider value={{}}>
      {children}
    </UserContext.Provider>

  )
}

export default UserProvider