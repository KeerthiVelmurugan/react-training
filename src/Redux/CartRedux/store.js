import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice"


const store = configureStore({

    reducer:{
        cartInfo:cartReducer
    }
})

export default store