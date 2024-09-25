import React from 'react'

import MainUser from "./MainUser";
import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';


const Names = () => {

  // const {users} = useContext(UserContext)

  return (
    <div>
      <MainUser/>
    </div>
  )
}

export default Names