import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fruits:[]
}

export const fruitSlice = createSlice({
    name:'fruits',
    initialState,
    reducers:{
        setFruits:(state, action)=>{
            state.fruits = [...state.fruits, action.payload]
        },
        deleteFruits:(state,action) => {
            state.fruits = state.fruits.filter(
                (fruits,index) => index !==action.payload
            )
            
        }
    }
})

export const {setFruits,deleteFruits} = fruitSlice.actions;

export default fruitSlice.reducer