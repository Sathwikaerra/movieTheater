import express from "express";
import { Login, deleteUser,userName,getUserId, getAllusers, getBookingsofUser, signUp, updateUser } from "../controller/userController.js";
const userRouter=express.Router();

userRouter.get("/allusers",getAllusers)
userRouter.post("/signup",signUp)
userRouter.put("/:id",updateUser)
userRouter.get("/name/:id",userName)
userRouter.delete("/:id",deleteUser)
userRouter.post("/login",Login)

userRouter.get("/userid/:id",getUserId)

userRouter.get('/bookings/:id',getBookingsofUser)


export default userRouter; 