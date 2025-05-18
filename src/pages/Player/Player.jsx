import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useParams ,Link } from 'react-router-dom'
const Player = () => {
    const id_video = useParams().id_video
    const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjljZmM1MTI4OTM2Y2JkZWQ2M2JjN2ZmZTUxNGMzZSIsIm5iZiI6MTc0NzQxMzQyNy43NTIsInN1YiI6IjY4Mjc2OWIzNzYyYjg4NWFlODc2ODM3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BWuQ3rDDiUrafn7I6JsMiyCG6yYnBOz8UF-mmtoWLeU'
    }
      }

  const [apiData , setApiDate] =useState([])

      useEffect(()=>{
         fetch(`https://api.themoviedb.org/3/movie/${id_video}/videos?language=en-US`, options)
        .then(res => res.json())
        .then(res => setApiDate(res.results))
        .catch(err => console.error(err));


      },[])

  return (

    <div className='players'>
      <Link to ={"/"}>
      <img src={back_arrow_icon} alt="" className="src" />
      </Link>
    {

        apiData.map((date_video,index)=>{
        return    <div className="player">
                  <iframe src={`https://www.youtube.com/embed/${date_video.key}`} frameborder="0"
                  title='video' allowFullScreen ></iframe>
                  <div className="player-info">
                    <p>{`${new Date(date_video.published_at).getDay()}.${new Date(date_video.published_at).getMonth()}.${new Date(date_video.published_at).getFullYear()}`}</p>
                    <p>{date_video.name}</p>
                    <p>{date_video.type}</p>
                  </div>
            </div>
        })
    }

    </div>
    
  )
}

export default Player