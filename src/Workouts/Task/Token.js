import React, { useState } from 'react'
import axios from 'axios';

function Token() {
    const[token,setToken] = useState(null)
    const[profileData,setProfileData]=useState(null)

    const loginAndGetToken = async () => {
        try {
          const response = await axios.post('https://api.escuelajs.co/api/v1/auth/login', {
            email: 'nico@gmail.com',
            password: '1234'
          });
          const tokens = response.data.token;
          console.log(response.data)
          setToken(tokens);
        } catch (error) {
          console.error('Error occurred while logging in:', error);
        }
        console.log(token)
      };
    
      loginAndGetToken()
  return (
    <div>
      
    </div>
  )
}

export default Token
