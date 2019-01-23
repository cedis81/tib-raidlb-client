import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'
import logo from '../tib_logo.png'

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Sign Out</Link>
    <Link to="/raids">Raids</Link>
    <Link to="/">Home</Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up">Sign Up</Link>
    <Link to="/sign-in">Sign In</Link>
  </React.Fragment>
)

// will not use home in alwaysOptions
// const alwaysOptions = (
//   <React.Fragment>
//   </React.Fragment>
// )

const Header = ({ user }) => (
  <header className="main-header">
    <img src={logo} alt="Logo"/>
    <nav>
      { user && <span>Welcome, {user.email}</span>}
      { user ? authenticatedOptions : unauthenticatedOptions }
      {/* { alwaysOptions }*/}
    </nav>
  </header>
)

export default Header
