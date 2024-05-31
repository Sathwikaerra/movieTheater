import React, { useEffect, useState } from 'react'
import {   deleteBooking, getUserBookings, getUserName } from '../components/api/apis'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate ,Link} from 'react-router-dom';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const UserProfile = () => {

  const navigate=useNavigate()
  const[message,setMessage]=useState()

  const [bookings,setBookings]=useState()
  const [username,setUserName]=useState()
  const [useremail,setUserEmail]=useState()

 let a=[];

 const handleDelete=async(id)=>{
  await deleteBooking(id)
  navigate('/userprofile')

 }




 

  useEffect(()=>{
    
     getUserName().then((res)=>{
      setUserName(res.name)
      setUserEmail(res.email)

    })

   
    getUserBookings().then((res)=>{
      setBookings(res.bookings);
      
    })
    
  

  //  bookings && bookings.map((i)=>{
  //   a.push(i.movie)
  // })
  // a && getMovieName(a).then((res)=>console.log(res))


  },[bookings])

  console.log(bookings)



  
    
 


  

  return (
    <div className='flex  mt-[30px] flex-col gap-10 justify-center items-center'>
      <div className='flex flex-col justify-center gap-3 items-center'>
        <AccountCircleIcon  style={{fontSize:"100px"}}/>
        <p className='font-bold'>Name :<span className='font-semibold'>{" "}{username}</span></p>
        <p className='font-bold'>Email :<span className='font-semibold'>{" "}{useremail}</span></p>
<button className='p-2 bg-black text-white rounded-lg hover:bg-violet-500 hover:text-white ' onClick={()=>{navigate('/updateuser')}}>Update User Details</button>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <div>
        
          <h1 className=' mb-[20px] font-bold text-xl text-center text-black shadow-neutral-50 shadow-2xl '>{ bookings && bookings ?"Bookings":"No Bookings yet"}</h1>
         
          
          <div>
          
            <div className='flex flex-col gap-3'>
              {
               bookings && bookings.map((i)=>{
                  return (
                    
                    <div className=' flex gap-3 p-3 rounded-lg sm:rounded-full flex-col sm:flex-row bg-slate-400  justify-center items-center' >
                    
                        <p className='font-bold sm:text-xs text-[10px]'>Movie : <span className='font-semibold text-[10px] sm:text-sm bg-slate-800 p-1 sm:p-2 text-white rounded-full'> {" "}{i.movie.title}</span></p>
                        <p className='font-bold  sm:text-xs text-[10px] '> Seat Number :
                         {
                          i.seatnumber.map((j)=>{
                    return( <span className='font-semibold text-[10px] sm:text-sm bg-slate-800 p-1 sm:p-2 text-white rounded-full'>{" "}{j}</span> 
                  )
                          })
                         }
                         </p>
                    
                    <p className='font-bold  sm:text-xs text-[10px]'>Date : <span className='font-semibold text-[10px] sm:text-sm bg-slate-800 p-1 sm:p-2 text-white rounded-full'>{" "}{new Date(i.date).toDateString()}</span></p>
                    <button onClick={()=>{handleDelete(i._id)
                      setMessage("Deleted Successfully")


                    }} className='bg-red-700 p-1 rounded-full'> <DeleteIcon  /></button>
                    
                   
                    </div>
                    
                  )
                }) 
              }

            </div>
            {
                                    message && (<>
                                    <p className='text-center text-blue-50 shadow-black shadow-xl text-xl'>{message}</p>
                           
                                    </>)
                                }

            

          </div>
      

        </div>

        


      </div>
    </div>
  )
}

export default UserProfile
