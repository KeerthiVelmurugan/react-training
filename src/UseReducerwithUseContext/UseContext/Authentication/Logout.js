import React, { useContext } from 'react'
import AuthContext from './AuthContext'

function Logout() {
    const{user, logout}=useContext(AuthContext)

  return (
    <div>
        { user ?
        (<>
        <h1>welcome! {user.username}</h1>
      <button onClick={logout}>logout</button> 
      </>):(
       <h2>please login</h2>)
}
    </div>
  )
}

export default Logout
