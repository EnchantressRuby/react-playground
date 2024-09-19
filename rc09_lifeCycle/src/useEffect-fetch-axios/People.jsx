import React, { useEffect, useState } from "react";

const People = () => {

  const [people, setPeople] = useState([])

  //! 1- fetch, then

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((dat) => setPeople(dat.data))
  }, [])

  console.log("hello");

  return (
    <div className="container text-center mt-4">

      <div className="row">
        {people.map((a) => (
          <div className="col-12 col-sm-6 col-md-4">
            <img src={a.avatar} alt="" />
            <h5>{a.first_name}</h5>
            <h6>{a.last_name}</h6>
          </div>
        ))}
      </div>

    </div>
  )
}

export default People