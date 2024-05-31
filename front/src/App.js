import React, { useEffect } from 'react'
import Header from './components/header'
import { Routes,Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import Movies from './components/movies/Movies'
import Admin from './components/Admin/Admin'
import Auth from './components/Auth/Auth'
import { useDispatch, useSelector } from 'react-redux'
import { adminActions, userActions } from './store'
import Booking from './components/bookings/Booking'
import UserProfile from './profile/UserProfile'
import Add from './components/ADDMOVIES/Add'
import AdminProfile from './profile/AdminProfile'
import SinglePage from './components/SinglePage/SinglePage'
import Update from './components/update/update'
import Payments from './components/payments/Payments'
import {loadStripe} from '@stripe/stripe-js'
import PageNotFound from './components/PageNotFound'


export default function App() {

  const stripePromise=loadStripe("pk_test_51PJum7SJ5bUiR3hhuEuAuzvu5XsPd2TCUbuejcm2gk3FCe3fK1Ci8N9HXNErIlp8ItDM4IVjAAjX8bn6FAKOZEYE003u7ip7lN");
console.log(stripePromise)
  const dispatch=useDispatch()
  
  const isAdminLoggedIn=useSelector((state)=>state.admin.isloggedIn);
  const isUserLoggedIn=useSelector((state)=>state.user.isloggedIn);

  console.log("isAdminLoggedIn",isAdminLoggedIn)
  console.log("isUserLoggedIn",isUserLoggedIn)
useEffect(()=>{
  if(localStorage.getItem("userId"))
    {
      dispatch(userActions.login())
      
    }
    else if(localStorage.getItem("adminId"))
      {
        dispatch(adminActions.login())
      }
},[dispatch])


  return (
    <div>

      <Header/>
      <div class="lines">
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
</div>

   <section>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/movies' element={<Movies/>}/>
      {
        !isAdminLoggedIn && !isUserLoggedIn && <>
          <Route path='/admin' element={<Admin/>}/>
      <Route path='/auth' element={<Auth/>}/>
        
        
        </>
      }

      {
        isUserLoggedIn && !isAdminLoggedIn && <>
          <Route path='/userprofile' element={<UserProfile/>}/>

<Route path='/booking/:id' element={<Booking/>}/>
<Route path='/updateuser' element={<Update/>}/>
<Route path='/payment' element={<Payments/>}/>  
        </>
      }
    
    {
      isAdminLoggedIn && !isUserLoggedIn && <>

<Route path='/add' element={<Add/>}/>
<Route path='/adminprofile' element={<AdminProfile/>}/>
      
      </>
    }
    <Route path='/movie/:id' element={<SinglePage/>} />
    <Route path='/*' element={<PageNotFound/>}/>
    
  

    </Routes>



   </section>

    </div>
   
  )
}
