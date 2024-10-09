import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {

  const { email, password } = useSelector((state) => state.permissionSlice)

  return email === "hello" && password === "redux" ? (< Outlet />) : (<Navigate to="/login" />)
}

export default PrivateRouter