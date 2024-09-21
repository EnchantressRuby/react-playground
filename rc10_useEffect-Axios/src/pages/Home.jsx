import React, { useEffect, useState } from 'react'
import AddInfo from '../components/AddInfo'
import InfoList from '../components/InfoList'
import axios from "axios"

const Home = () => {
  const [tutorials, setTutorials] = useState([])

  const url = "https://tutorial-api.fullstack.clarusway.com/tutorials/"

  //! GET - READ
  const getInfo = async () => {
    const res = await axios.get(url)

    // console.log(res.data)
    setTutorials(res.data)
  }

  useEffect(() => {
    getInfo();
  }, [])

  //! DELETE

  const deleteInfo=async(id)=>{
    await axios.delete(`${url}${id}/`)
  }



  return (
    <div>
      <AddInfo />
      <InfoList deleteInfo={deleteInfo} tutorials={tutorials} />
    </div>
  )
}

export default Home