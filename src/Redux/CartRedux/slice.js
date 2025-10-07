import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart:[],
    totalPrice:0
}





const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        AddToCart:(state,action) => {
            console.log(state, action);
            
            state.cart = [...state.cart,action.payload.product]
            state.totalPrice = state.totalPrice+action.payload.product.price
            console.log("after",state.cart, state.totalPrice);
            
        },
        DeleteCart:(state,action)=>{
            let items = state.cart.filter((_,index) => index!== action.payload.index) 
            let item = state.cart[action.payload.index]
            state.cart = items
            state.totalPrice = state.totalPrice - item.price

        }

    }
})


export const {AddToCart,DeleteCart} =cartSlice.actions
export default cartSlice.reducer 