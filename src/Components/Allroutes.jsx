import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Flight from './Flight/Flight'
import Home from './Home/Home'

const Allroutes = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/flight" element={<Flight/>} />
    </Routes>
  )
}

export default Allroutes