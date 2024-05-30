import {Autocomplete, Box,  TextField } from '@mui/material'
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import React, { useEffect, useState } from 'react'
import { getAllMovies } from './api/apis';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { adminActions, userActions } from '../store';


export default function Header() {

  const dispatch=useDispatch()
  const navigate=useNavigate()
 
  const[value,setValue]=useState(0)
  const [movies,setMovies]=useState([])
  const [selectedMovies,setSelectdMovies]=useState()

  
  
  const isAdminLoggedIn=useSelector((state)=>state.admin.isloggedIn);
  const isUserLoggedIn=useSelector((state)=>state.user.isloggedIn);
 

 
useEffect(()=>{
  getAllMovies().then((data)=>{setMovies(data.movies)}).catch((err)=>console.log(err))
 

  },[])

  const Logout=(isAdmin)=>{
    dispatch(isAdmin?adminActions.logout():userActions.logout())

  }

  const handleChange=(e,val)=>{
    const movie=movies.find((m)=>m.title===val);
console.log(movie)
    if(isUserLoggedIn)
      {
        navigate(`/booking/${movie._id}`);
      }
      if(!isUserLoggedIn && !isAdminLoggedIn)
        {
          navigate(`/movie/${movie._id}`)
        }

  }

  


  return (
    <div className='bg-black flex p-2  gap-2 items-center justify-between '>
      
     
        <div className='flex justify-center   text-white  items-center gap-2' >
        <MovieFilterIcon/><p className='  text-xs sm:text-[20px] text-white font-bold '>VVS Theater</p>
        </div>
      { !isAdminLoggedIn && <div className='border-b-2 w-[80px] sm:w-[300px] border-white' margin="auto">
        <Autocomplete
        onChange={handleChange}
        id="free-solo-demo"
        freeSolo
        options={movies&& movies.map((option) => option.title)}
        renderInput={(params) => <TextField sx={{input:{color:"white"}}} variant='standard' {...params} placeholder="Search" />}
      />
        </div>}

        <div className=' flex gap-[10px] sm:gap-[80px] mr-[10px] sm:mr-[50px] items-center  text-white'>
          <Link className='font-bold text-sm sm:text-xl hover:text-blue-700' to={'/movies'}>Movies</Link>
          {
              !isAdminLoggedIn && !isUserLoggedIn && (<>
                 <Link className='font-bold text-sm sm:text-xl hover:text-blue-700' onClick={()=>{setValue(1)}}  to={'/Admin'}>Admin</Link> 
            <Link className='font-bold text-sm sm:text-xl hover:text-blue-700' onClick={()=>{setValue(2)}}  to={'/Auth'} >Auth</Link>
              </>)

            }

{
              isUserLoggedIn && ( <>
                <Link className='font-bold text-sm sm:text-xl hover:text-blue-700'  to={'/userprofile'} >Profile</Link> 
           <Link className='font-bold text-sm sm:text-xl hover:text-blue-700'  onClick={()=>Logout(false)}  to={'/'}>Logout</Link>
             </>)
            }

            
{
              isAdminLoggedIn && ( <>

                <Link className='font-bold text-sm sm:text-xl hover:text-blue-700' to={'/add'}>+Movies</Link> 
                <Link className='font-bold text-sm sm:text-xl hover:text-blue-700' to='/Adminprofile' label=""> Profile</Link>

           <Link className='font-bold text-sm sm:text-xl hover:text-blue-700' onClick={()=>Logout(true)} to={'/'}>Logout</Link>
             </>)
            }
          
          


        </div>
          

          
           

         
          
      

       
      
    </div>
  )
}
