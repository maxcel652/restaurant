import React from 'react'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
        <Footer/>
    </div>
  )
}

export default App