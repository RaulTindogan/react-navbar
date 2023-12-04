import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './assets/components/Header'
import Home from './assets/components/Home'
import Discover from './assets/components/Discover'
import SignIn from './assets/components/Signin'
import Login from './assets/components/Login'


function App() {

  return (
    <Router>
      <div>
        <h1>Hello World</h1>
        <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
      </Routes>
        
      </div>
    </Router>
  )
}

export default App
