import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import '../../index.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const AuthForm = ({onsubmit,isAdmin}) => {
    const navigate=useNavigate()
    const [inputs,setInputs]=useState({
        name:"",
        email:"",
        password:"",
    })

    const handleChange=(e)=>{
        setInputs((prevState)=>({...prevState,[e.target.name]:e.target.value}))
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        onsubmit({inputs,signup: isAdmin?false:isSignup})
        

    }

    const [isSignup ,setisSignup]=useState(false);
  
  return (
  
         <div className='userF  rounded-xl border-t  shadow-2xl border-2  shadow-zinc-500 p-[5px]  sm:p-[20px]    flex justify-center items-center flex-col'>
<p  onClick={()=>navigate('/')} className='bg-red-600 rounded-full  ml-[330px] mb-[5px]'><CloseIcon/></p>
<h1 className='text-xl  text-center p-2 rounded-lg mb-[20px] font-semibold '>{isSignup?"Sign up":"Login "}</h1>

<form  onSubmit={handleSubmit} className='flex justify-center items-center gap-2  flex-col'>
    {
      !isAdmin &&isSignup &&   <div className='flex justify-center items-center  flex-col'>
    
        <input className=' text-center h-9 w-[350px] rounded-md border-2 border-gray-800 ' placeholder='Name' onChange={handleChange} name='name' value={inputs.name} type='text'/>
    </div>

    }

    <div className='flex justify-center items-center  flex-col'>
    
        <input className='h-9 text-center w-[350px] rounded-md border-2 border-gray-800 ' placeholder='Email' onChange={handleChange} name='email' type='email' value={inputs.email}/>
    </div>
    <div className='flex justify-center items-center  flex-col'>
  
        <input className=' text-center h-9 w-[350px] rounded-md border-2 border-gray-800 ' placeholder='Password' onChange={handleChange} name='password' value={inputs.password} type='password'/>
    </div>
     
     <button className= 'mt-2 rounded-md w-full bg-green-500 p-2 mb-[10px] text-black font-semibold'>{isSignup?"Signup":"Login"}</button>
</form>

{
    !isAdmin &&<button onClick={()=>setisSignup(!isSignup)} className= 'mt-5 rounded-md w-full p-2 hover:text-white mb-[5px] bg-slate-300 hover:bg-violet-500   text-black font-semibold' ><ArrowForwardIcon/> {!isSignup?"Signup":"Login"}</button>

}



</div>


   
  )
}

export default AuthForm
