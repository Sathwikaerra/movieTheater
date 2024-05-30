import React, { useState } from 'react'
import AuthForm from './AuthForm'
import { sendUserAuthRequest } from '../api/apis'
import { userActions } from '../../store'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '../../index.css'


const Auth = () => {

  const navigate=useNavigate()
const dispatch=useDispatch();
const [error,setError]=useState();
const onResreceived=(data)=>{
  console.log(data);
  dispatch(userActions.login())
  console.log(data.id)
  localStorage.setItem("userId",data.id);
 

}
  const getData=(data)=>{

  
    sendUserAuthRequest(data.inputs,data.signup).then(onResreceived).then(()=>{navigate('/')
      
    }).catch((err)=>setError("Invalid Credentials"))
  }
  return (
    <div className=' w-full flex justify-center items-center flex-col '>
       <div className=' flex justify-center items-center flex-col mt-[60px]'>
        <AuthForm onsubmit={getData} isAdmin={false}/>
       
    </div>
    <p className='font-semibold text-red-950' >{error&& (<p>{error}</p>)}</p>
    

   
  </div>
   
  )
}

export default Auth
