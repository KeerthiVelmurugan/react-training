import React, { useContext, useState } from 'react'
import AuthContext from './AuthContext'

function Login() {
    const [userData, setUserData] = useState({
        username:'',
        password:''
    })

    function handleChange(e){
        setUserData({...userData,[e.target.name]:e.target.value})
    }
    const { user,login } = useContext(AuthContext)

    function hadlelogin(){
        login(userData)
    }
  return (
    <div>
       {!user &&
       <div>
        <input type='text' name='username' onChange={handleChange} placeholder='enter username' />
        <br />
        <br />
        <input type='password' name='password' onChange={handleChange} placeholder='enter password' />
        <br />
        <br/>
       
      <button onClick={hadlelogin} >login</button>
      </div>
       }
      
      
      
    </div>
  )
}

export default Login
