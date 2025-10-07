import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slices/counterslice"


const store = configureStore({
    reducer:{
        counterInfo:counterReducer
    }
})

export default store