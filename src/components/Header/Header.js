import React from 'react'
import logo from '../../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'
import './Header.css'
export default function Header() {
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/Home">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <a className="main-nav-item" href="./sign-in.html">
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
    </nav>
  )
}
