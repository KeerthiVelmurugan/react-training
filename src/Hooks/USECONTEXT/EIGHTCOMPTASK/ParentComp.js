import React, { createContext, useState } from 'react'
import UserName from './UserName'
import Age from './Age'
import Mail from './Mail'
import Mobile from './Mobile'
import Address from './Address'

export const DetailsContext = createContext()
function ParentComp() {
    let [details, setDetails] = useState({
        userName:'Aadhi',
        age:'5',
        mail:'',
        mob:'',
        address:'',
        course:'',
        password:'' 
    })

    console.log(details)
  return (
    <DetailsContext.Provider value={{details, setDetails}}>
    <div>
       
       
      <UserName />
      <Age />
      <Mail />
      <Mobile />
      <Address />
    {details && 
    <div>
    <h1> {details.userName} </h1>
    <h1> {details.age} </h1>
    <h1> {details.mob} </h1>
    <h1> {details.mail} </h1>
    <h1> {details.address} </h1>
    </div>
    }
    

    </div>
    </DetailsContext.Provider>
  )
}

export default ParentComp
