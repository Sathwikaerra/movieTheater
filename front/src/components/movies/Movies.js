import React, { useEffect, useState } from 'react'
import { getAllMovies } from '../api/apis'
import MovieItem from '../movieitem'

const Movies = () => {
  const [movies,setMovies]=useState([])

  

  useEffect(()=>{
    getAllMovies().then((data)=>setMovies(data.movies)).catch(err=>console.log(err))

  },[])
  return (
    <div className='flex mt-4 gap-4 flex-col justify-center items-center'>
        <h1 className='text-center m-auto mt-[10px] font-mono font-bold text-black bg-fuchsia-400 p-2 rounded-md w-[300px] mb-[25px] font-bold text-[14px] sm:text-2xl'>All Movies </h1>
       <div className='flex justify-center items-center flex-wrap'>
        {
           movies && movies.slice(3).map((i,index)=>{
            return <MovieItem  key={index} id={i._id} title={i.title}   posterUrl={i.posterUrl} releaseDate={i.releaseDate}  />
            
    
            })
        }

       </div>


      
    </div>
  )
}

export default Movies
