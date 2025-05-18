import {React , useRef , useEffect, useState} from 'react'
import './TiltleCards.css'
import { Link } from "react-router";

const TitleCards = ({nameTitle , url}) => {
  
  const [apiData , setApiData] = useState([])
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjljZmM1MTI4OTM2Y2JkZWQ2M2JjN2ZmZTUxNGMzZSIsIm5iZiI6MTc0NzQxMzQyNy43NTIsInN1YiI6IjY4Mjc2OWIzNzYyYjg4NWFlODc2ODM3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BWuQ3rDDiUrafn7I6JsMiyCG6yYnBOz8UF-mmtoWLeU'
  }
};
 
  const userRefCard = useRef()
  const handleWheel  = (event) => {
  event.preventDefault()
  userRefCard.current.scrollLeft += event.deltaY
}
useEffect(()=> {
  fetch(`https://api.themoviedb.org/3/${url}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));
  

  userRefCard.current.addEventListener('wheel' , handleWheel)
},[])
  return (
    <div className='TitleCards'>
      <h2 className="popular">{nameTitle?nameTitle: 'Popular on netflix'}</h2>
      <div className="cardList" ref={userRefCard}>
        {
          apiData.map((card , index) =>
          {
            return <Link to={`/player/${card.id}`} className ="card">
              <img className = "card_popular_img" src={'https://image.tmdb.org/t/p/w500'+card.backdrop_path} alt="card img" />
              {
                card.original_title?  <p>{card.original_title}</p>
                :  <p>{card.name}</p>
              }
             
            </Link>
          })
          }
      </div>
    </div>
  )
}

export default TitleCards