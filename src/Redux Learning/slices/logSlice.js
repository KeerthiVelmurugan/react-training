import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    users:[]
}

export const logSlice = createSlice({
    name:'logging',
    initialState,
    reducers:{
        login:(state,action) => {
            if(state.users){
                
            }
        }
    }
})