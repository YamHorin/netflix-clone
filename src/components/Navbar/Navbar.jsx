import React, { useState, useEffect, useRef } from "react";
import './Navbar.css'
import logo from  '../../assets/logo.png'
import searchLogo from '../../assets/search_icon.svg'
import BellIcon from '../../assets/bell_icon.svg'
import profilePic from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'

const Navbar = ({name}) => {
  console.log("namev navbar ="+name)
  return (
    <div className='Navbar'>
      <div className='Navbar-left'>
        <img src={logo} alt="" srcset="" className='icon'/>
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>News & popular</li>
          <li>My list</li>
          <li>Browser By Language</li>
        </ul>
      </div>
      <div className='Navbar-right'>
        <img src={searchLogo} alt="" className="icon" />
        <p>{name}</p>
        <img src= {BellIcon} alt="" className="icon" />
          <div className="navbar-profile"  >
            <img src= {profilePic} alt="" className="profile" />
            <img src= {caret_icon} alt="" className='caret_icon'  />
            <div className="drop-down">
              <p>log out of netflix</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar