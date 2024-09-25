import React from 'react'
import Home from "./components/Home";
import data from "./data"
import { useState } from 'react';
import { createContext } from 'react';

//! context area
export const StudentContext = createContext()

const App = () => {
  const [students, setStudents] = useState(data)

  const changeColor = (id, newColor) => {
    setStudents(students.map((a) => a.id === id ? { ...a, color: newColor} : a))
  }

  return (

    <div>

      <StudentContext.Provider value={{ students, changeColor }}>
        <Home />
      </StudentContext.Provider>

    </div>
  )
}

export default App