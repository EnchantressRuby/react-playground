import React, { useEffect, useState } from 'react'
import AddInfo from '../components/AddInfo'
import InfoList from '../components/InfoList'
import axios from "axios"

const Home = () => {
  const [tutorials, setTutorials] = useState([])

  const url = "https://tutorial-api.fullstack.clarusway.com/tutorials/"

  return (
    <div>
      <AddInfo />
      <InfoList />
    </div>
  )
}

export default Home