import React from 'react'
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const ProfileLinks = ({ showProfile, setShowProfile }) => {
  return (
    <div className={showProfile? "profileLinks showprofile": "profileLinks"}>
      <NavLink className='linkIcons' onClick={() => setShowProfile(false)}><FaUser /> My Profile</NavLink>
      <NavLink className='linkIcons' onClick={() => setShowProfile(false)}><FaHeart /> WishList</NavLink>
      <NavLink className='linkIcons' onClick={() => setShowProfile(false)}><MdOutlineLogout /> Logout</NavLink>
      <NavLink className='btn' to='/signin' onClick={() => setShowProfile(false)}>Sign In</NavLink>
      <NavLink className='btn' to='/signup' onClick={() => setShowProfile(false)}>Sign Up</NavLink>
    </div>
  )
}

export default ProfileLinks
