import React,{useEffect, useState} from 'react'
import {API_KEY,imageUrl} from '../../constants/constants'
import './Banner.css';
import axios from '../../axios'
function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
     axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data)
      setMovie(response.data.results[5])
     })
  },[])
  return (
    <div style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path: ""})`}} className='banner'>
      <div className='content'>
        <h1 className='title'>{movie? movie.title:""}</h1>
        <div className='banner_buttons'>
            <button className='button1'>Play</button>
            <button className='button2'>Watch Later</button>
        </div>
        <p  className='description'>{movie ? movie.overview: ""}</p>
      </div>
      <div className='fade_bottom'></div>
    </div>
  )
}

export default Banner
