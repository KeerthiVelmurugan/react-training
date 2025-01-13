import React, { useState } from 'react'

function A1({onInput}) {

    const[input,setInput] = useState()
    function handlChange(e){
        setInput(e.target.value)
        onInput(input)
    }
  return (
    <div>
        <h1>Child</h1>
      <input type='text' onChange={handlChange} />
    </div>
  )
}

export default A1