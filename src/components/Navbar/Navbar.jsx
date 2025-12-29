import React, { useState, useEffect, useRef } from "react";
import './Navbar.css'
import logo from '../../assets/logo.png'
import searchLogo from '../../assets/search_icon.svg'
import BellIcon from '../../assets/bell_icon.svg'
import profilePic from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import facebookIcon from '../../assets/facebook_icon.png'
import instagramIcon from '../../assets/instagram_icon.png'
import twitterIcon from '../../assets/twitter_icon.png'
import youtubeIcon from '../../assets/youtube_icon.png'

const Navbar = ({ name }) => {
  console.log("namev navbar =" + name)
  return (
    <div className='Navbar'>
      <div className='Navbar-left'>
        <img src={logo} alt="" srcset="" className='icon' />
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
        <div className="navbar-social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" className="social-icon" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" className="social-icon" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <img src={youtubeIcon} alt="YouTube" className="social-icon" />
          </a>
        </div>
        <img src={searchLogo} alt="" className="icon" />
        <p>{name}</p>
        <img src={BellIcon} alt="" className="icon" />
        <div className="navbar-profile"  >
          <img src={profilePic} alt="" className="profile" />
          <img src={caret_icon} alt="" className='caret_icon' />
          <div className="drop-down">
            <p>log out of netflix</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar