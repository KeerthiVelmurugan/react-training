import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    count:0,
    step:1
}
const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        Increment:(state,action) => {
            console.log(state, action);
            
            state.count =  state.count+action.payload.step},
        Decrement:(state,action) => {
            state.count = state.count+action.payload.step
        },
        Reset: (state,action) => {state.count =0}
    }
    

})


export const {Increment, Decrement,Reset} = counterSlice.actions
export default counterSlice.reducer


// | Code                              | Purpose                                      |
// | --------------------------------- | -------------------------------------------- |
// | `counterSlice.actions`            | Gives you ready-made action creators         |
// | `export const {...} = ...actions` | Lets you dispatch actions like `Increment()` |
// | `export default ...reducer`       | Needed to plug the reducer into the store    |

// | Item                   | What it is                                       |
// | ---------------------- | ------------------------------------------------ |
// | `counterSlice.reducer` | The **main reducer function** for updating state |
// | `counterSlice.actions` | An object of **action creators** for dispatching |



// install react-redux and @reduxjs/toolkit