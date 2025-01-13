import React, { createContext } from 'react'
import UseContext2 from './UseContext2';


export const UserContext = createContext()

function UsecontextHook() {
    let name = 'kavi';
    
    
    

  return (
    <div>
        <UserContext.Provider value={name} >
            <h1>{name}</h1>
            <UseContext2 />
            
            
        </UserContext.Provider>
      
    </div>
  )
}

export default UsecontextHook
