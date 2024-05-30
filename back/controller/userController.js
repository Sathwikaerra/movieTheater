import User from '../models/usermodel.js'
import Booking from '../models/bookingmodel.js'
import bcrypt from "bcryptjs"
import Movie from '../models/moviemodel.js'
export const getBookingsofUser=async(req,res,next)=>{

    const id=req.params.id;

    let bookings;

    try {

        bookings=await Booking.find({user:id}).populate({path:"movie",model:"Movie"})

        
    } catch (error) {
        return console.log(error)
        
    }

    if(!bookings)
        {
            return res.status(400).json({message:"no booking by user"});

        }

        return res.status(200).json({bookings});




}

export  const getAllusers=async(req,res,next)=>{
    let users;

    try {
        users=await User.find();

        
    } catch (error) {
        return next(error)
        
    }

    if(!users)
        {
            return res.status(500).json({message : "unexpected error occured"})
        }

        return res.status(200).json({users})

}

export const signUp=async(req,res,next)=>{
const {name,email,password}=req.body;



if(!name && !email && !password)
    {
        return res.status(500).json({message:"invalid inputs"})
    }
    let newuser;
    const hashpassword= bcrypt.hashSync(password);
    try {
        newuser= new User({
            name,
            email,
            password:hashpassword,
        })
       newuser= await newuser.save();
    } catch (error) {
        return next(error)
        
    }

    if(!newuser)
        {
           return res.status(500).json({message:"unexpected error "})
        }

       return  res.status(200).json({id:newuser._id})



}




export const updateUser=async(req,res,next)=>{
    const {name,email,password}=req.body;

    const id=req.params.id;
    
    
    
    if(!name && !email && !password)
        {
            return res.status(500).json({message:"invalid inputs"})
        }
        let newuser;
        const hashpassword= bcrypt.hashSync(password);
        try {
            newuser= await User.findByIdAndUpdate(id,{
                name,
                email,
                password:hashpassword,
            });
          
        } catch (error) {
            return next(error)
            
        }
    
        if(!newuser)
            {
                res.status(500).json({message:"something went wrong "})
            }
    
            res.status(200).json({message:"successfully updated"})
    
    
    
    }


    

export const deleteUser=async(req,res,next)=>{
 

    const id=req.params.id;
    
    
    
   
        let newuser;
     
        try {
            newuser= await User.findByIdAndDelete(id);
          
        } catch (error) {
            return next(error)
            
        }
    
        if(!newuser)
            {
                res.status(500).json({message:"something went wrong "})
            }
    
            res.status(200).json({message:"successfully deleted"})
    
    
    
    }


    
export const Login=async(req,res,next)=>{
    const {email,password}=req.body;

 
    
    
    
    if(!email && !password)
        {
            return res.status(500).json({message:"invalid inputs"})
        }
        let xuser;

       
        try {
            xuser= await User.findOne({email})
          
        } catch (error) {
            return next(error)
            
        }
      
        
    
        if(!xuser)
            {
               return  res.status(500).json({message:"user not found"})
            }
            const crctpass= bcrypt.compareSync(password,xuser.password);
            if(!crctpass)
                {
                   return   res.status(500).json({message:"pass incrct "})
   
                }
    
          return  res.status(200).json({id:xuser._id,message:"successfully logged in"})
    
    
    
    }



    
export const userName=async(req,res,next)=>{


    const id=req.params.id;
    
    let newuser;
    
    
        try {
         newuser= await User.findById(id)
              
          
        } catch (error) {
            return next(error)
            
        }
    
        if(!newuser)
            {
                res.status(500).json({message:"something went wrong "})
            }
    
            res.status(200).json({name:newuser.name,email:newuser.email})
    
    
    
    }

    export const getUserId=async(req,res,next)=>{
        const id=req.params.id;

         
    let newuser;
    
    
    try {
     newuser= await User.findById(id)
          
      
    } catch (error) {
        return next(error)
        
    }

    if(!newuser)
        {
            res.status(500).json({message:"something went wrong "})
        }

        res.status(200).json({newuser})
    }
