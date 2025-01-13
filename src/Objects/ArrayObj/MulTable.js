import React, { useState } from 'react'

function MulTable() {
    const [tableNo, setTableNo] = useState();
    const [result, setResult] = useState([])
    console.log('hello')
    const ResultArr = [];
    let i=1;
    const multiply = () => {
        for(i=1;i<15;i++){
            let r = tableNo*i;
            ResultArr.push({n:tableNo, i:i, ans:r})
            
        }
        setResult(ResultArr)
    }
    

  return (
    <div> 
        <input type='text' onChange={(e)=>setTableNo(e.target.value)}></input>
        <br />
        <button onClick={multiply}>click</button>
        
        <ul>
        {
            result.map((item,index) =>(
                <li key={index}>
                    {item.n} X {item.i} = {item.ans}
                </li>
            ))
        }
        
        
      </ul>
        
    </div>
  )
}

export default MulTable
