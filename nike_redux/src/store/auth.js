import { createSlice } from "@reduxjs/toolkit";
import * as apiActions from './api'

const url = "http://localhost:5000/api/v1/"

const slice  = createSlice({
    name:"auth",
    initialState:{
        token:"",
        firstname:"",
        errorMessageLog:null,
        errorMessageReg:null,
        lastLogin:"",
        loading:false
    },
    reducers:{

        userLoginRequested : (user,action) => {
            user.loading = true
        },
        userLoggedIn : (user,action) => {
            user.token = action.payload.data.token
            user.firstname = action.payload.data.firstname
            user.lastLogin = Date.now()
            user.errorMessageLog = null
            user.loading = false
        },
        userRegistered : (user,action) => {
            user.token = action.payload.data.token
            user.firstname = action.payload.data.firstname
            user.lastLogin = Date.now()
            user.errorMessageReg = null
            user.loading = false
        },
        userLoginFailed : (user,action) => {
            user.loading = false
            if(action.payload.from === "auth/userLoggedIn")user.errorMessageLog = action.payload.errMessage
            else user.errorMessageReg = action.payload.errMessage
        }
    }
})


export const {userLoginRequested,userLoggedIn,userRegistered,userLoginFailed}  = slice.actions
export default slice.reducer


export const handleLogin = (data) => (dispatch,getState) => {
    dispatch(apiActions.apiCallBegan({
        url:url+'login',
        method:'POST',
        data:data,
        onStart:userLoginRequested.type,
        onSuccess:userLoggedIn.type,
        onError:userLoginFailed.type
    }))
}


export const handleRegister = (data) => (dispatch,getState) => {
    // console.log(data)
    dispatch(apiActions.apiCallBegan({
        url:url+'register',
        method:'POST',
        data:data,
        onStart:userLoginRequested.type,
        onSuccess:userRegistered.type,
        onError:userLoginFailed.type
    }))
}