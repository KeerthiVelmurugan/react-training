import React, { useState } from 'react'

function Array() {
    const [state, setState] = useState([]);
    let arr = [3,4,5,8]

    const handleChange = (e) => {
        setState([...state, e.target.value]);
    }

//  console.log(_.chunk(arr,2))
        
  return (
    <div>
      <input type='text' onChange={handleChange}></input>
      <ul>
      {
        arr.map((i,index)=>(
        <li key={index}>{i}</li>

        ))
      }
      </ul>
    </div>
  )
}

export default Array
