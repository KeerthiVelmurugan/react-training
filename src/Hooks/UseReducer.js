import React, { useReducer } from 'react'

function UseReducer() {

    function reducer(state,action){
        // return {count:state.count+1}

        switch(action){
            case 'increment':
                return {count:state.count+1}
            case 'decrement':
                return {count:state.count-1}
            default:
                return state
        }
    }

    const [state,dispatch] = useReducer(reducer,{count:0})

    function increment(){
        dispatch({
            type:'increment'
        })
    }
    function decrement(){
        dispatch({
            type:'decrement'
        })
    }
  return (
    <div>
        <button onClick={increment}>plus</button>
        {state.count}
        <button onClick={()=>{dispatch("decrement")}}>minus</button>
      
    </div>
  )
}

export default UseReducer
