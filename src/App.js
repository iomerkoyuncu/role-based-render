import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';


import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

import Navbar from './components/Navbar/Navbar'

function App() {

  const { user } = useSelector((state) => state.auth)

  console.log(user)
  return (
    <>
      <Router>
        <Navbar userRole={
          user ? user.role : null
        } />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
