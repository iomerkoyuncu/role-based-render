import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';


import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

import Navbar from './components/Navbar/Navbar'
import AddUser from './pages/AddUser';
import UpdateUser from "./pages/UpdateUser"

function App() {

  const { user } = useSelector((state) => state.auth)


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
          <Route path="/add" element={<AddUser />} />
          <Route path="/update/:id" element={<UpdateUser />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
