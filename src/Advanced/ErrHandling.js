import React, { useState } from 'react'

function ErrHandling() {
    const [num , setNum] = useState()
    let r =0
    const check = () => {
    try{
    
    if(isNaN(num)){
      throw new Error("pls enter valid number")
    }
       else {
         r= num**2

  
        console.log(r);
    }
  
    }catch(error){
        console.log(error.message)
    }
    finally{
        console.log('End');
    }
}
check()
  return (
    <div>
      <input type='text'
      onChange={(e) =>setNum(e.target.value)}></input>
      <button onClick={check}>check</button>
      {r}
    </div>
  )
}

export default ErrHandling
