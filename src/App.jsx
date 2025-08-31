import React from 'react'
import {Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Agence from './pages/Agence.jsx'
import Projects from './pages/Projects.jsx'

const App = () => {
  return (
    <div className='text-white'>
      {/* <Link to='/'>Home</Link>
      <Link to='/agence'>Agence</Link>
      <Link to='/projects'>Projects</Link> */}
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<div>Agence</div>} />
        <Route path='/projects' element={<div>Projects</div>} />
      </Routes>
    </div>
  )
}

export default App
