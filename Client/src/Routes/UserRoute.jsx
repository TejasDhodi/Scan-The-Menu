import React from 'react'
import UserLayout from '../Layouts/UserLayout'
import HomePage from '../Pages/User/HomePage'
import Contact from '../Pages/User/Contact'
import { Route, Routes } from 'react-router-dom'
import Register from '../Pages/User/Register'
import Login from '../Pages/User/Login'
import MenuPage from '../Pages/User/MenuPage'
const UserRoute = () => {
  return (
    <UserLayout>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/signup' element={<Register />}/>
        <Route path='/signin' element={<Login />}/>
        <Route path='/menu' element={<MenuPage />}/>
      </Routes>
    </UserLayout>
  )
}

export default UserRoute
