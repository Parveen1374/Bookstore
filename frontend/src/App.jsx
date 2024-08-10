import React from 'react'
import Home from './home/Home'
import Courses from './courses/Courses'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/courses' element={<Courses />}/>
        {/*<Route path='/contact/' element={<Contact/>}/>
        <Route path='/about/' element={<About/>}/> */}
      </Routes>
    </>
  )
}

export default App
