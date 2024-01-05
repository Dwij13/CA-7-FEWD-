import React from 'react'
import {Route,Routes} from "react-router-dom"
import Home from './Home'
import RegisterForm from './RegisterForm'

export default function Allroutes() {
  return (
    <div>
    {/* code for all the routes */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/register' element={<RegisterForm/>}></Route>
      </Routes>
    </div>
  )
}
