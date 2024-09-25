import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserProvider'

const MainUser = () => {
  const { users, changeWidth } = useContext(UserContext)

  return (
    <div>
      {users.map((a) => (
        <div>
          <h3>{a.login}</h3>
          <img src={a.avatar_url} alt="" width={a.width ? a.width : "300px"}/>
          <div>
            <label htmlFor="">Image width (px)</label>
            <input type="number" 
            onChange={(e)=>changeWidth(a.id, e.target.value)}/>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MainUser