import React from 'react'
import { Routes, Route } from 'react-router-dom'
import App from '../App'
import Home from '../screens/home/Home'
import UserHome from '../screens/userhome/userHome'
import AdminHome from '../screens/adminhome/home/adminHome'
import Update from '../screens/adminhome/updateNews/Update'
import NewRecords from '../screens/adminhome/newsRecords/NewRecords'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

function Routers() {
  return (
    <>

  <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/users" element={<UserHome />} />
      <Route path="/admin" element={<AdminHome/>} />
      <Route path="/adminupdate" element={<Update/>} />
      <Route path="/adminrecord" element={<NewRecords />} />

    </Routes>
    <Footer/>
    </>
  )
}

export default Routers
