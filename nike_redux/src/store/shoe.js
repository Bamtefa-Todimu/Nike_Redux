import { createSlice } from "@reduxjs/toolkit"

import * as apiActions from './api'


const url = "http://localhost:5000/api/v1/getAllShoes"

const shoeSlice = createSlice({
    name:"shoes",
    initialState:{
        list: [],
        loading: false,
        lastFetch: null
    },
    reducers:{

        shoeRequested: (shoe,action) => {
            shoe.loading = true
        },
        shoesRecieved: (shoe,action) => {
            shoe.list = action.payload
            shoe.lastFetch = Date.now()
            shoe.loading = false
        },
        shoeFailed : (shoe,action) => {
            shoe.loading = false
        }
    }
})


export const {shoeRequested,shoesRecieved,shoeFailed} = shoeSlice.actions
export default shoeSlice.reducer


export const requestShoe = () => (dispatch,getState) => {
    dispatch(apiActions.apiCallBegan({
        url,
        method:"GET",
        data:[],
        onStart:shoeRequested.type,
        onSuccess:shoesRecieved.type,
        onError:shoeFailed.type
    }))
}