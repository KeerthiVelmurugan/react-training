import React, { useContext } from 'react'
import {UserContext} from './UsecontextHook'


function Async() {
    console.log('hi');
    setTimeout(() => console.log('hello1'),3000);
    setTimeout(() => console.log('hello2'),1000);
    console.log('bye');

   const name = useContext(UserContext);
   const age =useContext(UserContext)
   console.log(name)

  return (
    <div>
      {name}
      {}
      
      
    </div>
  )
}

export default Async
