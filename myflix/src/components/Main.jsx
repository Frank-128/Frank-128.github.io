import React,{useEffect, useState} from 'react'
import requests from './pages/Requests'
import axios from 'axios'
function Main() {
    const myStyles={
        position:'absolute',
        top: '160px',
        color :'white',
        
    };
    const gradient={
        height:'550px',
        width:'100%'
    }
    const overlay={
        height:"60%",
        backgroundImage: 'linear-gradient(to left, rgba(0,0,0,.6) , black)'
      }
    const [movies,setMovies]=useState([])
    const movie = movies[Math.floor(Math.random()*movies.length)];
    useEffect(
        ()=>{
            axios.get(requests.requestPopular).then(
                (response)=>{
                    setMovies(response.data.results)
                }
            )
        },[])
        console.log(movie);
  return (
    <div className='w-100 h-[20px]'>
    <div className='w-100 h-50 '>
        <div className='position-absolute w-100  bg-blue bg-lighten' style={overlay}></div>
        <img className='img-fluid w-20 h-10' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}  style={gradient} alt={movie?.title} />
    </div>
    <div  className='position-absolute  p-4 top-20' style={myStyles}>
    <h1 className='fs-xxl'>{movie?.title}</h1>
    <div className='my-4'>
        <button className='btn bg-light px-5 py-2'>Play</button>
        <button className=' bg-dark text-light mx-4  px-5 py-2'>Watch Later</button>
    </div>
    <p className='fs-4'>Released:{movie?.release_date}</p>
    <p>{movie?.overview}</p>
    </div>
    </div>
  )
}

export default Main