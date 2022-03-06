import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ErrorPage from './pages/Error/Error'
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'
import UserPage from './pages/UserPage/UserPage'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/user' element={<UserPage/>}></Route>
          <Route path='/*' element={<ErrorPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
