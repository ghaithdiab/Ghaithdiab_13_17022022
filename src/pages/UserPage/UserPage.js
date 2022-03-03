import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './UserPage.css'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import GetUserInfo from '../../Actions/GetUserInfoAction'
import UpdateUserInfo from '../../Actions/UpdateUserInfoAction'
export default function UserPage() {
  const [formDisplayed, setFormDisPlayed] = useState(false)
  const [name, setName] = useState({ firstName: '', lastName: '' })
  const globalState = useSelector((state) => state)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetUserInfo())
  }, [dispatch])

  const updateUserName = (e) => {
    e.preventDefault()
    dispatch(UpdateUserInfo(name))
    setFormDisPlayed(false)
  }
  if (!globalState.isLoggedin) {
    return <Navigate to="/" />
  }
  return (
    <div>
      <Header />
      <main className="main-user bg-dark">
        <div className="header">
          {!formDisplayed ? (
            <div>
              <h1>
                Welcome back
                <br />
                {globalState.firstName} {globalState.lastName}
              </h1>
              <button
                className="edit-button"
                onClick={() => setFormDisPlayed(true)}
              >
                Edit Name
              </button>
            </div>
          ) : (
            <form onSubmit={updateUserName}>
              <h1>Welcome back</h1>
              <div className="input">
                <input
                  required
                  className="input-edit"
                  type="text"
                  id="firstName"
                  placeholder={globalState.firstName}
                  value={name.firstName}
                  onChange={(e) =>
                    setName({ ...name, firstName: e.target.value })
                  }
                />
                <input
                  required
                  className="input-edit"
                  type="text"
                  id="lastName"
                  placeholder={globalState.lastName}
                  value={name.lastName}
                  onChange={(e) =>
                    setName({ ...name, lastName: e.target.value })
                  }
                />
              </div>
              <div className="buttons">
                <button className="edit-button form-button" type="submit">
                  Save
                </button>
                <button
                  className="edit-button form-button"
                  type="button"
                  onClick={() => setFormDisPlayed(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
