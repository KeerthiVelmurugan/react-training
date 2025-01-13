import React, { useState } from 'react'

function Multi() {
    
    const [value,setValue] = useState()
    const  [result, setResult] = useState([])
    function mul(){
       
        let r =[]
    for(let i=1;i<=10;i++){
        
      let t=i*value
        r.push(<div>{i}X{value}={t}</div>)

    }
    console.log(r)
    setResult(r)
}

  return (
    <div>
        <input type='text' onChange={(e)=>{setValue(e.target.value)}} />
        <button onClick={()=>{mul()}}>Generate Table</button>
      {result}
    </div>
  )
}

export default Multi
