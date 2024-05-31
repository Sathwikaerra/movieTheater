import React, { useEffect, useState } from 'react'
import { getAllMovies } from './api/apis'
import MovieItem from './movieitem'


const Homepage = () => {
  const [movies,setMovies]=useState([])

  

  useEffect(()=>{
    getAllMovies().then((data)=>setMovies(data.movies)).catch(err=>console.log(err))

  },[])
 
  return (
    <div>

    
    <div className='flex justify-center items-center'>
      <div className='flex justify-center p-3 sm:p-4' >
        <img  className='w-[500px] h-[150px] sm:h-[250px] sm:w-[850px]' src='https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2024/01/file-image-2024-01-16t184123-1705410689.jpg'/> 
      </div>
    </div>

    <div className='flex justify-center items-center gap-11 flex-col'>
      <h1 className=' font-bold text-[20px] sm:text-[35px] '>Latest movies</h1>
      <div className='grid grid-cols-3 sm:flex sm:gap-4 sm:justify-center  sm:items-center sm:flex-wrap'>

      {
         movies && movies.slice(3).map((i,index)=>{
        return <MovieItem  key={index} id={i._id} title={i.title}   posterUrl={i.posterUrl} releaseDate={i.releaseDate}  />
        

        })
      }
            </div>



    </div>


    </div>
   
  )
  
}

export default Homepage
