import {configureStore, createSlice} from '@reduxjs/toolkit'

const userSlice=createSlice({
    name:"user",
    initialState:{isloggedIn:false},
    reducers:{
        login(state){state.isloggedIn=true},
        logout(state){
            localStorage.removeItem("userId")
         

            state.isloggedIn=false}
    }
})

const adminSlice=createSlice({
    name:"admin",
    initialState:{isloggedIn:false},
    reducers:{
        login(state){
           

            state.isloggedIn=true},
        logout(state){
            localStorage.removeItem("AdminId")
            localStorage.removeItem("token")
            state.isloggedIn=false}
    }
})



export const userActions=userSlice.actions;
export const adminActions=adminSlice.actions;


export const store=configureStore({
    reducer:{
        user:userSlice.reducer,
        admin:adminSlice.reducer
    }
})


