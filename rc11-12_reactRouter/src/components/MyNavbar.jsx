import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

import logo from "../img/logo.png"

//! Use the Link component when you want to create a link within your React app that doesn't require active styling.
//! Use the NavLink component when you need a link within your React app that requires active styling when it's active.
//! Use the <a> tag when you want to link to an external page or a non-route page in your React app.


const MyNavbar = () => {
  return (
    <Navbar expand="lg" bg="light">
      <Container>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              style={({ isActive }) => ({ color: isActive && "red" })}
              className="nav-link"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              style={({ isActive }) => ({ fontSize: isActive && "50px" })}
              to="/teacher"
              className="nav-link"
            >
              Teacher
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                border: isActive && "1px solid blue",
              })}
              to="/courses"
              className="nav-link"
            >
              Courses
            </NavLink>
            <NavLink
              style={({ isActive }) => ({ backgroundColor: isActive && "salmon" })}
              to="/contact"
              className="nav-link"
            >
              Contact
            </NavLink>
            <NavLink to="/paths" className="nav-link">
              Paths
            </NavLink>

            <Nav.Link target="blank" href="https://github.com/clarusway"> Github</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar