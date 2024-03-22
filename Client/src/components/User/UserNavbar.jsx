import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import '../../Styles/User/UserComponent.css'
import ProfileLinks from './ProfileLinks';
import { FaChevronDown, FaShoppingCart, FaUser } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const UserNavbar = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const cartLength = useSelector(state => state.cart.data).length;
  const userName = useSelector(state => state.authentication.userProfile?.fullName);
  const authToken = useSelector(state => state.authentication.data);
  const location = useLocation();

  const handleShowProfile = () => setShowProfile(!showProfile);

  useEffect(() => {  
    const path = location.pathname.includes('/admin') || location.pathname.includes('/adminAuth') || location.pathname.includes('/menuManage') || location.pathname.includes('/createDish') || location.pathname.includes('/orders');
    setIsAdmin(path)
  }, [location.pathname])
  
  return (
    <>
      <header id='header'>
        <nav className={isAdmin ? "navbar hideNav" : "navbar"}>
          <div className="navBrand">
            <img src="/Images/Nav-Brand.jpeg" alt="" />
          </div>
          <ul className="navItems">
            <li className="navList"><NavLink to='/' className='navLink'>Home</NavLink></li>
            <li className="navList"><NavLink to='/menu' className='navLink'>Menu</NavLink></li>
            <li className="navList"><NavLink to='/contact' className='navLink'>Contact</NavLink></li>
          </ul>

          <ul className="carts">
            <li ><NavLink className='linkIcons' to={'/menu/cart'} ><FaShoppingCart /> Cart {cartLength}</NavLink></li>
            <li><NavLink className='linkIcons' onClick={handleShowProfile}><FaUser /> { authToken && userName? userName : 'Please Login'} <FaChevronDown className={showProfile ? 'down' : ''} /></NavLink></li>
          </ul>
          <div className="hamburger"></div>
        </nav>
        <ProfileLinks showProfile={showProfile} setShowProfile={setShowProfile}/>
      </header>
    </>
  )
}

export default UserNavbar
