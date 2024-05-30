import express  from 'express'
import mongoose from 'mongoose';
import dotenv from "dotenv"
import userRouter from './routes/userRoute.js';
import adminRouter from './routes/adminRouter.js';
import movieRouter from './routes/movieRoute.js';
import bookingRouter from './routes/bookingRouter.js';
import cors from 'cors'
import path from 'path'
import ticketRouter from './routes/ticketRouter.js';



dotenv.config()

const app=express();

app.use(cors())

app.use(express.json())
  

app.use('/user',userRouter)
app.use('/admin',adminRouter)
app.use('/movie',movieRouter)
app.use('/booking',bookingRouter)
app.use('/ticket',ticketRouter)
// app.use(express.static(path.join(__dirname, 'front/build')));

app.use('/api/hello',(req,res,next)=>{
res.send("hiii")
})





  
mongoose.connect(process.env.MONGO_URL).then(()=>{
    app.listen(5000,()=>{
        console.log(" db running 5000")
    })
}).catch((error)=>{
    console.log(error)
})


