import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    theme:"light"
}

export const themeSlice = createSlice({
    name:"themes",
    initialState,
    reducers:{
        SetTheme:(state,action) => {
            state.theme = state.theme =="light"? "dark":"light"
        }
    }
})


export const {SetTheme} = themeSlice.actions
export default themeSlice.reducer