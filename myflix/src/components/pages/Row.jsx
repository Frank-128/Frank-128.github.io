import ImportAll from './ImportAll'
import React, { useState,useEffect } from 'react'


const Row = () => {
    const [movies,setMovies]= useState([])
    useEffect(()=>{
       
        },[])
    
    
  return (
    <>
        
        <div className='position-relative d-flex align-items-center'>
        <ImportAll />
            </div>
            
            
    </>
  );
};

export default Row;