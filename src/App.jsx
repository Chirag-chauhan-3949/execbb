import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import Registration from './Pages/Registraion'
import Login from './Pages/Login'
import Home from './Pages/Home'
import BuyersSearch from './Pages/Buyerssearch';


function App() {

  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/search-buyers" element={<BuyersSearch />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
