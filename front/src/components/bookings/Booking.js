import React, { useEffect, useState } from 'react'
import { addTicket,BookedTickets, getMovieDetails, getUserName, newBooking } from '../api/apis'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import'../../index.css'
import { iconClasses } from '@mui/material';

const Booking = () => {

    const navigate=useNavigate()

    const [message,setMessage]=useState();

    const [date,setDate]=useState()
    // const [values,setValues]=useState()
    const [isActive ,setIsActive]=useState(false)
    const [error,setError]=useState();
    const a=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]

    const [tickets,setTickets]=useState({})
    
    const id=useParams().id;
    
    const [movie,setMovie]=useState()
    const[Uemail,setEmail]=useState();
    const [booked,setBooked]=useState()
    const [seats,setSeats]=useState([])

    const [selectedSeats,SetSelectedSeats]=useState([])


    useEffect(()=>{
        SetSelectedSeats(localStorage.getItem('selectedseats'));

    },[])

   

  


    useEffect(()=>{
        BookedTickets().then((res)=>{
            setTickets(res.Tickets)
            
            


        })

      

       




        
     
                //   getTickets();
        

              
           
    },[tickets])

    function populateUI(){


        let BSeats=JSON.parse(localStorage.getItem('selectedseats'))
      

        if(BSeats)
            {
                // BSeats=Array.from(BSeats)
                // BSeats=BSeats.slice(1,BSeats.length-1)
                
                
                
         
                  console.log(BSeats)
              let seat=document.getElementsByClassName('click')
       seat=Array.from(seat)
         
                
                 
         
                if(seat.length>0 && BSeats.length>0)
              {
                       
                       seat.forEach((i,iindex)=>{
            //           
             BSeats.forEach((j,jindex)=>{
              
                if(BSeats[jindex]===Number(i.innerText))
                    {
                        i.classList.add('booked')
                    }
               
        

            })
            
     
               })
            
              }
                
            }
     
}

    const[t,setT]=useState([])

    // const getTickets=()=>{
    //     setT(selectedSeats.split(','));
        
    // }







    
    useEffect(()=>{
        getUserName().then((res)=>{
            setEmail(res.email)
        })


       

        

        getMovieDetails(id).then((res)=>{
          
            setMovie(res.movie)
           
        }).catch((err)=>console.log(err))

     
        populateUI()
        

        

    },[])

    

    

    const handleChange=(e)=>{
        setDate(e.target.value)
        // setValues((prevState)=>({...prevState,[e.target.name]:e.target.value}))
    }
    
    
    const handleSubmit=(e)=>{
        e.preventDefault();
     
        addTicket({seats:seats,bdate:date,email:Uemail}).then((res)=>setBooked("Ticket bookd successfully")).then(()=>{
            newBooking({seats:seats,movie:movie._id,bdate:date}).then((res)=>console.log(res)).then(()=>{
                localStorage.setItem("Tickets",seats)
            })

        }).catch((err)=>{setError("Seat Already Selected")})
     
    }
    
    let r=[1,2,3];
    
    const handleseat=(e,index)=>{

        try {
            e.currentTarget.classList.toggle('selected')
            
            setSeats([...seats,Number(e.currentTarget.innerText)])
            let clickValues;
                 clickValues = JSON.parse(localStorage.getItem('selectedseats'))|| [];
    
            

    
    
          
        
            clickValues.push(Number(e.currentTarget.innerText));
    

            localStorage.setItem('selectedseats', JSON.stringify(clickValues));
    
            
        
    

            
  
              
        
              
        } catch (error) {

                console.log(error)
            
        }

        // setIsActive(!isActive)

     
        // setSeats([...seats,Number(e.currentTarget.innerText)])
     
         

            // localStorage.setItem('selectedseats',m);

        // if(Number(selectedSeats[0])==index+1)
        //     {
                  
        //     e.currentTarget.classList.remove('seat')
        //     e.currentTarget.classList.add('booked')

        //     }
        //     if(Number(selectedSeats[2])==index+1)
        //         {
                      
        //         e.currentTarget.classList.remove('seat')
        //         e.currentTarget.classList.add('booked')
    
        //         }
        //         if(Number(selectedSeats[4])==index+1)
        //             {
                          
        //             e.currentTarget.classList.remove('seat')
        //             e.currentTarget.classList.add('booked')
        
        //             }
        //             if(Number(selectedSeats[6])==index+1)
        //                 {
                              
        //                 e.currentTarget.classList.remove('seat')
        //                 e.currentTarget.classList.add('booked')
            
        //                 }


        // if(Number(selectedSeats[0]+(selectedSeats[1]))===index+1)
        // {
            
        //     e.currentTarget.classList.remove('seat')
        // e.currentTarget.classList.add('booked')
        // }
        // if(Number(selectedSeats[3]+(selectedSeats[4]))===index+1)
        //     {
            
        //         e.currentTarget.classList.remove('seat')
        //     e.currentTarget.classList.add('booked')
        //     }

        //     if(Number(selectedSeats[6]+(selectedSeats[7]))===index+1)
        //         {
                
        //             e.currentTarget.classList.remove('seat')
        //         e.currentTarget.classList.add('booked')
        //         }



        



    }

   
    const handleLocal=(e)=>{
        // if(localStorage.getItem('selectedseats')==null)
        //     {
        //         localStorage.setItem('selectedseats',[]);
        //     }

        //     r=JSON.parse(localStorage.getItem('selectedseats'))
        //     r.push(seats)

        //     localStorage.setItem('selectedseats',JSON.stringify(r));
    }

    const [bg,setBG]=useState(false)

   



   
          
        
    
  return (
    <div className='flex justify-center items-center gap-3 flex-col'>
        <div>
        <h1 className='text-center m-auto mt-[10px] font-mono text-white bg-orange-300 p-2 rounded-md w-[300px] mb-[25px] font-bold text-[20px] sm:text-3xl'>Booking platform</h1>
       {
        movie && (
            <div className='flex flex-col gap-6 justify-center items-center'>
                <h1 className='font-extrabold text-[18px] sm:text-2xl'>Book Tickets of Movie :<span className='font-bold text-xl'> {" "}{movie.title}</span></h1>
                <div className='flex gap-10  justify-center items-center'>
                    <div className='flex flex-col justify-center items-center'>
                    <img className='w-[400px]' src={movie.posterUrl}/>
                    <p className='font-bold text-[14px] sm:text-xs'>Name :<span className='font-semibold'>{" "}{movie.title}</span></p>
                    <p className='font-bold text-[14px] sm:text-xs'>Actors : {movie.actors.map((i)=>{
                    return(
                        <span className='font-semibold text-[14px] sm:text-xs'>{" "}{i}</span>

                    )})}</p>
                   
                    <p className='font-bold text-[14px] sm:text-xs'>About :<span  className='font-semibold' >{" "}{movie.description}</span></p>
                    <p className='font-bold text-[14px] sm:text-xs'>Realese-Date: <span  className='font-semibold'>{" "}{new Date(movie.releaseDate).toDateString()}</span></p>



                        </div>

                        <div className='right flex flex-col gap-6 m-1 justify-center items-center  '>
                            <h2 className='font-bold text-[15px] bg-white  rounded-md sm:text-2xl'>Book Your seat here..</h2>
                            <form onSubmit={handleSubmit} className='flex flex-col gap-6 justify-center items-center '>

                                 {/* <div className='flex flex-col gap-6 justify-center items-center '>
                                    <label className='font-bold'>SeatNumber</label>
                                    <input className='border-2 border-slate-900' name='seatnumber' onChange={handleChange} value={values} type='number'/>
                                </div>  */}


                                <div className='flex flex-col gap-6 justify-center items-center '>
                                <label className='font-bold'>Select the Date</label>
                                    <input className='border-2 border-slate-900'name='date' onChange={handleChange} value={date} type='date'/>
                                </div>

                                <button onClick={(e)=>{
                                handleLocal(e)
                                setMessage("Seat selected proceed to payments")}} className='hover:bg-black hover:text-white bg-blue-600   p-2 rounded-lg text-white'>Book Now</button>
                                {
                                    error&& <p>{error}</p>
                                }

{
    booked && <p>{booked}</p>
}

                                {
                                    message && (<>
                                    <p className='text-center text-blue-50 shadow-black shadow-xl text-xl'>{message}</p>
                                    <Link className='bg-black  text-white  p-2 rounded-lg ' to={'/payment'}><ArrowForwardIcon/>Payment Section</Link>
                                    </>)
                                }


                            </form>
                        </div>

                   

                </div>
                </div>

        )

       }
      
    </div>
    <div className='flex flex-col justify-center items-center gap-4'>
        <h1 className='font-bold text-xl'>{   tickets ?"Booked Seats":"No Seats Booked "}</h1>


         <div   className='container flex justify-center flex-wrap items-center gap-1'>
            {
                a && a.map((i,index)=>{
                    return(
                        <span onClick={(e)=>handleseat(e,index)}

                          value={i}  className= {`click ${isActive ?"selected":""}  ${bg?"booked":""} seat bg-gray-500 p-2 rounded-t-lg`}>{i}</span>
                    )
                })
            }

            

        </div> 

     <div className='flex justify-center items-center'> 
        {
              !tickets && tickets.map((i)=>{
                  return (
                    
                    <div className='' >
                    
                        
                        <p className='font-bold  '>
                         {
                          i.seatnumber.map((j)=>{
                    return( <span className=''>{" "}{j}</span> 
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
    
  )
}

export default Booking
