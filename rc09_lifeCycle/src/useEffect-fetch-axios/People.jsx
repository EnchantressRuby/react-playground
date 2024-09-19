import React, { useEffect, useState } from "react";

const People = () => {

  const [People, setPeople] = useState([])

  //! 1- fetch, then

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((dat) => setPeople(dat.data))
  }, [])

  console.log("hello");

  return (
    <div>People</div>
  )
}

export default People