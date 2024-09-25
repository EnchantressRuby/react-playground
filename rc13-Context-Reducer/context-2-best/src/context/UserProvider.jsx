import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'



//! 1- creating context
export const UserContext=createContext()
//! 2- Provider
const UserProvider = ({children}) => {

const[users,setUsers]=useState([])

useEffect(()=>{
fetch("https://api.github.com/users").then((res)=>res.json()).then((dat)=>setUsers(dat)  )
},[])


const changeWidth=(id,widtH)=>{


setUsers(users.map((a)=>a.id===id  ? {...a, width: widtH} : a))


}




  return (
    <UserContext.Provider value={{users,changeWidth}}>
{children}
    </UserContext.Provider>
  )
}

export default UserProvider