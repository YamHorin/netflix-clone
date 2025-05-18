import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer.jsx'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards.jsx'
import gibliImage from '../../assets/gibli.jpg'
import categories from './listCategory.js'
import { useLocation } from 'react-router-dom';
const Home = () => {
  const location = useLocation();
  const name  = location.state?.userName
  console.log(name)


  return (
    <div className='Home'>
      <Navbar name = {name}></Navbar>
      <div className="hero">
        <img src={gibliImage} alt="" className='hero-banner-img'/>
        <div className="caption-main">
          <img src={hero_title} alt="" className="hero-title-img" />
          <p>
            In a world where ordinary people are pushed to extraordinary limits, "Hero" follows the gripping journey of a reluctant champion who never asked to be a savior—but was chosen by fate. When a quiet city is rocked by a growing wave of darkness, one person rises to challenge the chaos, not with superpowers or wealth, but with courage, heart, and an unshakable sense of justice.
          </p>
          <div className="hero-buttons">
            <button className='btn-hero'><img src={play_icon} alt="" />play</button>
            <button className='btn-hero'><img src={info_icon} alt="" id='info_btn'/>info</button>

          </div>
         <TitleCards nameTitle = {categories[0].name} url={categories[0].path}/>
        </div>
      </div>
      <div className="card-more-shows">
      {
        categories.slice(1).map((category , index) =>(
          <TitleCards nameTitle={category.name} url={category.path}/>
        ))
        
      }

      </div>
    <Footer/>
    </div> 
  )
}

export default Home