import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './UserPage.css'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import GetUserInfo from '../../Actions/GetUserInfoAction'
import UpdateUserInfo from '../../Actions/UpdateUserInfoAction'
import Account from '../../components/Account/Account'
import { accounts } from '../../dataMockup/AccountsData'

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
        <Account
          title={accounts[0].title}
          amount={accounts[0].amount}
          description={accounts[0].description}
        ></Account>
        <Account
          title={accounts[1].title}
          amount={accounts[1].amount}
          description={accounts[1].description}
        ></Account>
        <Account
          title={accounts[2].title}
          amount={accounts[2].amount}
          description={accounts[2].description}
        ></Account>
        {/* {accounts.forEach((element)=>{
          <Account title={element.title} amount={element.amount} description={element.description}></Account>
        })} */}
      </main>
      <Footer />
    </div>
  )
}
