import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
