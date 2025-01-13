import React, { createContext, useState } from 'react'
import CounterChild from './CounterChild'
export const CounterContext = createContext()
function CounterParent() {
    let [count, setCount] = useState(0)
    function increment(){
        setCount(count+1)
    }

    function decrement(){
        setCount(count-1)
    }
  return (
    <CounterContext.Provider value={{count, increment, decrement}}>
    <div>
      <CounterChild />
    </div>
    </CounterContext.Provider>
  )
}

export default CounterParent
