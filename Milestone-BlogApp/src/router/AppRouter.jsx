import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Navbar from "../components/Navbar";
import Profile from "../pages/Profile";
import NewBlog from "../pages/NewBlog";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import MyBlog from "../pages/MyBlog";

function AppRouter() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="" element={<PrivateRouter />}>
          <Route path="/newBlog" element={<NewBlog />} />
          <Route path="/myBlog" element={<MyBlog />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRouter;