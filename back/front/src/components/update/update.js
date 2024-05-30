import React, { useEffect, useState } from 'react'
import { updateUser, username } from '../api/apis';


function Update() {
    const[ name,setName]=useState();
 const [email,setEmail]=useState()
 const [password,setPassword]=useState()
 const [message,setMessage]=useState();



    useEffect(()=>{

        username().then((res)=>{setName(res.name)
            setEmail(res.email)
        })

    },[])

    console.log(email,name,password)


    const handleSubmit=(e)=>{
        e.preventDefault();

        updateUser({name,email,password}).then((res)=>{
            setMessage("Updated Successfully")
    })
    }

    

  return (
    <div className='flex justify-center mt-[30px] items-center'>
        <form onSubmit={handleSubmit} className='flex justify-center items-center flex-col p-3 gap-2'>
            <div className='flex justify-center  gap-3 items-center'>
                <label>Name</label>
            <input value={name} onChange={(e)=>setName(e.target.value)} className='rounded-md w-[250px] text-center' type='text' placeholder='name' name='name'/>
            </div>

            <div className='flex justify-center gap-3  items-center'>
                <label>Email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} className='rounded-md   w-[250px] text-center' type='email' placeholder='Email' name='email'/>
            </div>
            
            <div className='flex justify-center  gap-3 items-center'>
                <label>Password</label>
            <input value={password} onChange={(e)=>setPassword(e.target.value)}  className='rounded-md  w-[250px] text-center' type='password' placeholder='Password' name='password'/>
            </div>

            <button className='bg-green-500 text-black p-2 rounded-lg'>Update</button>
            {
                message && <p className='text-black font-serif text-xs shadow-slate-700 shadow-xl' >{message}</p>
            }
            
        </form>
      
    </div>
  )
}

export default Update
