import { useNavigate } from 'react-router-dom'
import React from 'react'
import { useDispatch,useSelector } from 'react-redux'

const MovieItem = ({title,releaseDate,posterUrl,id}) => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const isAdminLoggedIn=useSelector((state)=>state.admin.isloggedIn);
  const isUserLoggedIn=useSelector((state)=>state.user.isloggedIn);
 
  return (
    <div>
         <div className='w-[100px] font-semibold truncate  text-[8px]  sm:text-[16px] sm:w-[200px] rounded-md   hover:scale-90 hover:shadow-2xl hover:shadow-zinc-900  flex justify-center items-center flex-col p-3 '>
    <img className='w-[150px] h-[100px] sm:w-[200px] sm:h-[190px]' src={posterUrl}/>
    <h3>{title}</h3>
   
    <button onClick={()=>{
      isUserLoggedIn?  navigate(`/booking/${id}`) :  navigate(`/movie/${id}`) }}
      
 
      
        className='bg-blue-600 hover:bg-slate-800 hover:text-white rounded-lg  p-2 sm:p-3 text-white'>Book</button>
    </div>

    </div>
   )
  
}

export default MovieItem
