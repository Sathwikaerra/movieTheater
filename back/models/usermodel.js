import mongoose from "mongoose"

const Schema=mongoose.Schema;

const userSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,

    },
    password:{
        type:String,
        required:true,
        unique:true,
        

    },
    bookings:[{
        type:mongoose.Types.ObjectId,
        ref:"booking"
    }]
})

export default mongoose.model("User",userSchema);