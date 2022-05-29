import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Body from './components/Body'
import Class from './components/Class'
// import Header from './components/Header'
import HeaderHero1 from './components/HeaderHero1'
import HeaderW from './components/HeaderW'
import Signin from './components/RegistrationPage/Signin'
// import Signup from './components/Signup'
import Twitter from './components/Twitter'
import TwitterLog from './components/TwitterLog'

export default function App() {
  return (
    <BrowserRouter>
    <HeaderW/>
    <Routes>
      {/* <Route path='/' element={<Signup/>}/> */}
      <Route path='/' element={<Body/>}/>
      <Route path='/class' element={<Class/>}/>
      <Route path='/twitter' element={<Twitter/>}/>
      <Route path='/twitterlogin' element={<TwitterLog/>}/>
      <Route path='/page1' element={<HeaderHero1/>}/>
      <Route path='/page2' element={<Signin/>}/>
    </Routes>
    </BrowserRouter>
  )
}
