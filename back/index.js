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

// import {fileURLToPath} from 'url'

// const __filename=fileURLToPath(import.meta.url)
// const __dirname=path.dirname(__filename);
// console.log(__dirname)
const __dirname=path.resolve();



dotenv.config()

const app=express();

app.use(cors())

app.use(express.json())
  

app.use('/user',userRouter)
app.use('/admin',adminRouter)
app.use('/movie',movieRouter)
app.use('/booking',bookingRouter)
app.use('/ticket',ticketRouter)
app.use(express.static(path.join(__dirname,'/front/build')));

app.get('*',(req,res)=>{

    res.sendFile(path.join(__dirname,'front','build','index.html'));

})


app.use('/api/hello',(req,res,next)=>{
res.send("hiii")
})




try {
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        app.listen(5000,()=>{
            console.log(" db running 5000")
        })
    }).catch((error)=>{
        console.log(error)
    })
    
} catch (error) {
    console.log('error in connecting')
    
}
  



