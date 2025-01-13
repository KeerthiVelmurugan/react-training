import { Button } from 'bootstrap'
import React, { useState } from 'react'
import Logout from './Logout'

function LoginLogout() {
  //  let isLoggedIn =true

    const [isLoggedIn, setIsLoggedIn] = useState(true)

    
  return (
    <div>
      <h1>{isLoggedIn ? 'welcome back':'Please login'}</h1>
      {isLoggedIn && 
      <button type='submit' onClick={()=> {setIsLoggedIn(!isLoggedIn)}}>logout</button>}
      {!isLoggedIn && 
      <button type='submit' onClick={()=> {setIsLoggedIn(!isLoggedIn)}}>login</button>}
    </div>
  )
}

export default LoginLogout
