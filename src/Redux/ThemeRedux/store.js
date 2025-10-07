import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";

const store = configureStore({
    reducer:{
    themeInfo:themeReducer}
})

export default store

