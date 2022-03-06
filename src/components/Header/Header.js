import React from 'react'
import logo from '../../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'
import './Header.css'
import { useDispatch, useSelector } from 'react-redux'
import Logout from '../../Actions/LogoutAction'


export default function Header() {
  const globalState = useSelector((state) => state) //get global State info
  const dispatch = useDispatch()
  const disConnect = () => {
    dispatch(Logout())
  }
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {globalState.isLoggedin ? (
        <div>
          <Link to="/user" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              {globalState.firstName}
          </Link>
          <Link className="main-nav-item" onClick={disConnect} to="/">
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        </div>
      ) : (
        <Link className="main-nav-item" to="/Login">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      )}
    </nav>
  )
}
