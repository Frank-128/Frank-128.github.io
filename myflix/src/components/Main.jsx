import React,{useEffect, useState} from 'react'
import requests from './pages/Requests'
import axios from 'axios'
function Main() {

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
    <div className='w-100 h-50 img-gradient'>
        <img className='img-fluid w-20 h-10' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
    </div>
    <div  className='position-absolute  p-4 top-20'>
    <div>
        <button className='btn bg-light px-5 py-2'>Play</button>
        <button className=' bg-dark text-light mx-4  px-5 py-2'>Watch Later</button>
    </div>
    
    </div>
    </div>
  )
}

export default Main