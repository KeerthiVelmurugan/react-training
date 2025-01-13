import React, { useContext } from 'react'
import { CounterContext } from './CounterParent'

function CounterChild() {
    let {count, increment, decrement} = useContext(CounterContext)
  return (
    <div>
        <button onClick={increment}>+</button>
        {count}
        <button onClick={decrement}>-</button>
      
    </div>
  )
}

export default CounterChild
