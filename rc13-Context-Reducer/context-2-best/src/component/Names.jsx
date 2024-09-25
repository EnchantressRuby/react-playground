import React from 'react'

import MainUser from "./MainUser";
import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';


const Names = () => {

  const {users} = useContext(UserContext)

  return (
    <div>
      {users.slice(0,4).map((a)=>(
        <div key={a.id} style={{textAlign:"center", background:"lightgreen"}}>
          {a.login}
        </div>
      ))}
      <MainUser/>
    </div>
  )
}

export default Names