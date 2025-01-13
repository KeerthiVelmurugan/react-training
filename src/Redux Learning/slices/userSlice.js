import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    users:[],
}

export const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
        SetUsers:(state,action)=>{
            state.users= [...state.users, action.payload]
        },
        deleteUser :(state,action) => {
            state.users = state.users.filter(
                (user,index) => index !== action.payload
            )
        },
           
        
    }
})

export const {SetUsers, deleteUser, updateUser} = userSlice.actions;

export default userSlice.reducer 