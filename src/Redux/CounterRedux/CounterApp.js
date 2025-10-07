import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Decrement, Increment, Reset } from './Slices/counterslice'

function CounterApp() {
    const data = useSelector(state => { 
      console.log(state)
      
      return state.counterInfo.count})
    const dispatch = useDispatch()
   
  return (
    <div>
        
      <button onClick={() => dispatch(Increment({step:2}))}>+</button>
      {data}
      <button onClick={() => dispatch(Decrement({step:3}))}>-</button>
      <button onClick={() => dispatch(Reset())}>reset</button>
    </div>
  )
}

export default CounterApp
