import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {

  return JSON.parse(localStorage.getItem("EMAIL")) === "ipek" &&
    JSON.parse(localStorage.getItem("PASS")) === "1234" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
  //If the user enters the correct name, navigate to the desired page using the Outlet component.
  //If the user enters the wrong name, stay on the current page (Home) or redirect to another path using Navigate.
}

export default PrivateRouter