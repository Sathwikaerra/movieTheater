import React, { useState } from 'react'
import AuthForm from '../Auth/AuthForm'
import { sendAdminAuthRequest } from '../api/apis'
import { adminActions } from '../../store'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Admin = () => {

  const navigate=useNavigate();

  const dispatch=useDispatch();
  const [error,setError]=useState();

  const onResreceived=(data)=>{
    console.log(data);


    dispatch(adminActions.login());
    localStorage.setItem("AdminId",data.id);
    localStorage.setItem("token",data.token)
  }
  const getData=(data)=>{
    console.log("Admin",data) 
    sendAdminAuthRequest(data.inputs).then(onResreceived).then(()=>navigate('/')).catch((err)=>setError("Invalid Credentials"))
  }
  return (
    <div className=' w-full flex justify-center items-center flex-col '>
    <div className=' flex justify-center items-center flex-col mt-[60px]'>
     <AuthForm onsubmit={getData} isAdmin={true}/>
    
 </div>
 <p className='font-semibold text-red-950' >{error&& (<p>{error}</p>)}</p>
 


</div>
  )
}

export default Admin
