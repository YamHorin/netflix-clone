import React from 'react'
import './Footer.css'
import twitterIcon from '../../assets/twitter_icon.png'
import youtubeIcon from '../../assets/youtube_icon.png'
import instagramIcon from '../../assets/instagram_icon.png'
import facebookIcon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className="footerIcons">
        <img className = "img-icon"src={twitterIcon} alt="twitterIcon" />
        <img className = "img-icon"src={youtubeIcon} alt="youtubeIcon" />
        <img className = "img-icon"src={instagramIcon} alt="instagramIcon" />
        <img className = "img-icon"src={facebookIcon} alt="facebookIcon" />
      </div>
      <br />
      <div className="titles">

      <ul className="list-options">
        <li> Help Center </li>
        <li>  Jobs </li>
        <li> Privacy </li>
      </ul>
      <ul className="list-options">

        <li> Contact Us </li>
        <li> Legal Notice </li>
        <li> Coockies Info </li>
      </ul>
      <ul className="list-options">
        <li>Creators </li>
        <li> help center </li>
        <li> help center </li>

      </ul>
      </div>
      <span>
        © 1997-2025 Netflix clone, Inc.
      </span>
      </div>
    )
}

export default Footer