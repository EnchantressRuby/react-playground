import React from 'react'
import ShowUser from './pages/ShowUser'
import UserProvider from './context/UserProvider'


const App = () => {
  return (
    <div>
      <UserProvider>
        <ShowUser />
      </UserProvider>
    </div>
  );
}

export default App