import React from 'react'
import Home from "./components/Home";
import data from "./data"
import { useState } from 'react';
import { createContext } from 'react';

export const StudentContext=createContext()

const App = () => {
return (
  <div>
    <Home />
  </div>
)
}

export default App