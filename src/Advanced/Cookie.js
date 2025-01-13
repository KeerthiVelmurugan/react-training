 import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'

function Cookie() {
  let [cookiValue, setCookieValue] = useState()
    
        const acceptCookies = () => {
            Cookies.set("acceptcookie","aadhi",{expires:10})
            alert("accepted")
        }
        console.time("myTimer");

        // Perform some time-consuming operation
        for (let i = 0; i < 1000000; i++) {
          // Some operation
        }
        
        console.timeEnd("myTimer");
        
        useEffect(() => {
          setCookieValue(Cookies.get("acceptcookie")); // Retrieve cookie value on component mount
      }, [cookiValue]);
    
  return (
    <div>
        <p>This website uses cookies to improve your experience.</p>
      <button onClick={acceptCookies}>Accept</button>
      {cookiValue}
    </div>
  )
}

export default Cookie
