import React, { useState } from 'react'
import { addMovie } from '../api/apis'
import { Link } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function Add() {

  const [inputs,setInputs]=useState({
    title:"",
    releaseDate:"",
    description:"",
   featured:false,
   posterUrl:"",
  


  })

  const [actors,setActors]=useState([" "])
  const [actor,setActor]=useState(" ")
  const [message,setMessage]=useState()
  const [message1,setMessage1]=useState()

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(inputs,actors)
    addMovie({...inputs,actors:actors}).then((res)=>console.log(res)).catch((err)=>console.log(err))
    setMessage1("Movie added succesfully")

  }

  const handleChange=(e)=>{
    setInputs((prevState)=>({...prevState,[e.target.name]:e.target.value}))
  }





  return (
    <div className='flex justify-center flex-col items-center mt-[20px]'>
        <form className='flex justify-center flex-col gap-2  items-center' >
            <div className='flex justify-center flex-col gap-2  items-center' >
                <label className='sm:text-xs  text-[15px] font-serif font-semibold'>Title:</label>
                <input className='rounded-lg p-1 font-serif text-center border-blue-900 border-2 shadow-xl shadow-slate-600' type='text' onChange={handleChange} value={inputs.title} placeholder='title' name='title'/>

            </div>
            <div className='flex justify-center flex-col gap-2  items-center' >
                <label className='sm:text-xs  text-[15px] font-serif font-semibold'>Description:</label>
                <textarea className='rounded-lg p-1 font-serif text-center border-blue-900 border-2 shadow-xl shadow-slate-600' type='text' onChange={handleChange} value={inputs.description} placeholder='Description' name='description'/>

            </div>

            <div className='flex justify-center flex-col gap-2  items-center' >
                <label className='sm:text-xs  text-[15px] font-serif font-semibold'>Release-Date:</label>
                <input className='rounded-lg p-1 font-serif text-center border-blue-900 border-2 shadow-xl shadow-slate-600' type='date' onChange={handleChange} value={inputs.releaseDate} placeholder='releaseDate' name='releaseDate'/>

            </div>

            <div className='flex justify-center flex-col gap-2  items-center' >
                <label className='sm:text-xs  text-[15px] font-serif font-semibold'>Image:</label>
                <input className='rounded-lg p-1 font-serif text-center border-blue-900 border-2 shadow-xl shadow-slate-600' type='text' onChange={handleChange} value={inputs.posterUrl} placeholder='' name='posterUrl'/>


            </div>

            <div className='flex justify-center gap-2  items-center' >
                <label className='sm:text-xs  text-[15px] font-serif font-semibold'>featured:</label>
                <input className='rounded-lg p-2 font-serif text-center border-blue-900 border-2 shadow-xl shadow-slate-600' type='checkbox' onChange={(e)=>{
                  setInputs((prevState)=>({...prevState,featured:e.target.checked}))
                }} value={inputs.featured} placeholder='' name='featured'/>

            </div>

            <div className='flex justify-center  gap-2  items-center' >
                <label className='sm:text-xs  text-[15px] font-serif font-semibold'>Actors:</label>
                <input className='rounded-lg p-1 font-serif text-center border-blue-900 border-2 shadow-xl shadow-slate-600' type='text'  onChange={(e)=>{
                  setActor(e.target.value)
                               
                }}
                 placeholder='' name='actors'/>

                 <button className='bg-blue-700 p-2 rounded-md text-white font-serif' onClick={(e)=>{
                  e.preventDefault()
                   setActors([...actors,actor]) 
                   setMessage("actor added")
                 }}>Add</button>

            </div>
            {
                                    message && (<>
                                    <p className='text-center mb-[10px] text-blue-50 shadow-black shadow-xl text-xl'>{message}</p>
                           
                                    </>)
                                }

            <button className= ' hover:bg-white hover:text-black bg-black p-3 rounded-lg text-white  font-semibold' type='submit' onClick={handleSubmit}>Add Movie</button>




        </form>
        {
                                    message1 && (<>
                                    <p className='text-center text-blue-50 shadow-black shadow-xl text-xl'>{message1}</p>
                                    <Link to={'/adminprofile'}><ArrowForwardIcon/>Your Movies</Link>
                                    </>)
                                }
      
    </div>
  )
}

export default Add
