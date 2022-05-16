import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Class from './components/Class'
import Header from './components/Header'
import Signup from './components/Signup'

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/class' element={<Class/>}/>
    </Routes>
    </BrowserRouter>
  )
}
