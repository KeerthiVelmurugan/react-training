import React, { useContext } from 'react'
import { UserContext } from './UseContextHook';


function UseContext2() {
    
   const nam = useContext(UserContext);
   
   console.log(nam)

  return (
    <div>
      {nam}
      
      
      
    </div>
  )
}

export default UseContext2
