import { createSlice } from "@reduxjs/toolkit";


const slice =  createSlice({
    name:"cart",
    initialState:
    {
        list:[],
        noOfItems:0,
        recentItem:{},
        loading:false,
        modal:false,
        totalPrice:0
    },
    reducers:{
        cartRequested:(cart,action) => {
            cart.loading = true
        },
        shoeAdded:(cart,action) => {
            cart.list.push(action.payload.shoe)
            cart.noOfItems += 1
            cart.recentItem = action.payload.shoe
            cart.modal = true
            cart.totalPrice += parseFloat(action.payload.shoe.shoeprice.slice(1))
        },
        shoeRemoved:(cart,action) => {
            cart.list = cart.list.filter((item) => item._id !== action.payload.shoe._id)
            cart.noOfItems -= 1
            cart.totalPrice -= parseFloat(action.payload.shoe.shoeprice.slice(1))
            
        },
        cartRequestFailed:(cart,action) => {
            cart.loading = false
        },
        cartModalClosed:(cart,action) => {
            cart.modal = false
        }

    }
})

export const {cartRequested,shoeAdded,shoeRemoved,cartRequestFailed,cartModalClosed} = slice.actions
export default slice.reducer


export const addShoeToCart = (shoe) => (dispatch,getState) => {
    dispatch(shoeAdded({
        shoe:shoe
    }))
}

export const removeShoeFromCart = (shoe) => (dispatch,getState) => {
    dispatch(shoeRemoved({
        shoe:shoe
    }))
}