import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useDispatch ,useSelector} from 'react-redux'
import { useState } from 'react'
import Login from '../../Actions/AuthAction'
import './LoginPage.css'
import { Navigate } from 'react-router-dom';
export default function LoginPage() {
  const [info, setData] = useState({
    email: "",
    password: "",
  })
  const globalState=useSelector(state=>state)
  const dispatch=useDispatch()
  const handelLogin=(e)=>{
    e.preventDefault();
    dispatch(Login(info))
  }
  if(globalState.isLoggedin){return <Navigate to='/user'/>}
  return (
    <div>
      <Header />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          {globalState.error ? <p className='error-message'>Email or password incorrect</p> :""}
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={info.email}
                onChange={(e) => setData({ ...info, email: e.target.value })}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                autoComplete="on"
                value={info.password}
                onChange={(e)=>setData({...info,password:e.target.value})}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
            {/* <a href="./user.html" class="sign-in-button">Sign In</a> */}
            {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
            <button className="sign-in-button" onClick={(e)=>handelLogin(e)}>Sign In</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  )
}
