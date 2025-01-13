import React, { useState } from 'react'
import A1 from './A1'

function B1() {
    const[value, setValue] = useState()
    function handleInput(d){
        setValue(d)
    }
  return (
    <div>
        <h1>Parent</h1>
        {value}
      <A1 onInput={handleInput}></A1>
      
    </div>
  )
}

export default B1
