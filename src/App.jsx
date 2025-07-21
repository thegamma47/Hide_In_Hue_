import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Body from './components/Body'
import HeroSection from './components/HeroSection'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {
  return (
<>
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Body />}>
      <Route index element={<HeroSection />} />
      <Route path="login" element={<Login/>} />
      <Route path="signup" element={<Signup />} />
    </Route>
  </Routes>
</BrowserRouter>



</>
  )
}

export default App
