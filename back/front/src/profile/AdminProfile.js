import React, { useEffect, useState } from 'react'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { DeleteBookedTicket, getAdminById, getBookings } from '../components/api/apis';
import { deleteMovie ,BookedTickets} from '../components/api/apis';
import '../index.css'

const UserProfile = () => {

  const navigate=useNavigate()

  const [admin,setAdmin]=useState()

  const [movies,setmovies]=useState([])

 let a=[];

 const [message,setMessage]=useState()





 

  useEffect(()=>{

    getAdminById().then((res)=>{
        setAdmin(res.admin.email);
        setmovies(res.admin.addMovies)

    })

    
    
 

  //  bookings && bookings.map((i)=>{
  //   a.push(i.movie)
  // })
  // a && getMovieName(a).then((res)=>console.log(res))


  },[admin])


console.log(movies)

const handleDeleteImage=async(id)=>{
 await deleteMovie(id).then((res)=>{
  setMessage(res.message)
 })
  

}
const [tickets,setTickets]=useState({})

useEffect(()=>{
  getBookings().then((res)=>{setTickets(res.bookings)})


},[tickets])

const [show,setShow]=useState(false);


const handleTicket=()=>{
  setShow(!show)

}
const [deleteS,setDelete]=useState()

const DeleteTicket=(id)=>{
  DeleteBookedTicket(id).then((res)=>{setDelete('Succesfully deleted')})
}


console.log(tickets)


  
    
 


  

  return (
    <div className='main'>

   
    <div className='flex sm:flex-row mt-[30px]   flex-col gap-10 justify-center items-center'>
      <div className='flex flex-col justify-center items-center'>
        <AccountCircleIcon style={{fontSize:"100px"}}/>
      
        <p className='font-bold'>Email :<span className='font-semibold'>{" "}{admin}</span></p>
        <div className='flex flex-col justify-center items-center'>
          <button onClick={handleTicket} className='bg-violet-950 text-white p-1  rounded-lg'>{tickets.length>0?"View Tickets":"No Tickets"}</button>
        
<p>{deleteS?deleteS:""}</p>
     <div className='flex w-[400px] mt-[20px] gap-6 flex-wrap justify-center items-center'> 
        {
             show && tickets && tickets.map((i)=>{
                  return (
                    
                    <div className='flex   ' >
                    
                        
                        <p className='font-bold bg-violet-200 p-1 rounded-md justify-center items-center flex flex-col flex-wrap '>
                       <p>{i.movie.title}</p>
                        <span>{new Date(`${i.date}`).toDateString()}</span>
                        <button onClick={()=>{DeleteTicket(i._id)
                    
                  }}><DeleteIcon/></button>

                         {
                          i.seatnumber.map((j)=>{
                    return( <div>
                      
                      <span className='bg-green-400  p-1 rounded-lg '>{" "}{j}</span> 
                      
                      </div>
                  )
                          })
                         }
                         </p>
                    
                   
                    
                   
                    </div>
                    
                  )
                }) 
              }
        </div> 
        
        </div>


      </div>
      <div className='flex flex-col justify-center items-center'>
        <div className='font-bold text-xl '>
          {
            movies && movies.length>0 ?"Added movies":"No Movies Added"

          }
          <div className=' font-normal flex justify-center flex-col items-center gap-4'>
          {

            movies && movies.length>0 && movies.map((i)=>{
              return(
                <div className='text-sm p-2 flex justify- flex-col bg-slate-600  text-white gap-4  items-center gap-2'>
                  <p>{i.title}</p>
                  <p>{new Date(`${i.releaseDate}`).toDateString()}</p>
                  <img  className='text-sm w-[100px] '  src={i.posterUrl} alt=' Poster not released'/>
                  <button onClick={()=>{handleDeleteImage(i._id)
                    
                  }}><DeleteIcon/></button>
                  
                  </div>
              )
            })
             
            
          }
        {
                                    message && (<>
                                    <p className='text-center text-blue-50 shadow-black shadow-xl text-xl'>{message}</p>
                                    </>)
                                }
          

          </div>
         


        
        
         
          
       
      

        </div>

        


      </div>
    </div>
    </div>
  )
}

export default UserProfile
