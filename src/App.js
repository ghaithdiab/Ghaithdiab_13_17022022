import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Home' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
