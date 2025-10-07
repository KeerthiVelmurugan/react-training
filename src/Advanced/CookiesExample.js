// import React, { useState } from 'react';
// import Cookies from 'js-cookie';

// const CookieExample = () => {
//   let [CookieValue, setCookieValue] = useState()
//   // Function to accept cookies
//   const acceptCookies = () => {
//     // Set a cookie named 'acceptedCookies' with value 'true'
//     Cookies.set('accepted', "true", { expires: 30 }); // expires in 30 days
//     alert('Cookies accepted!');
//     setCookieValue(Cookies.get("accepted"))
//   };

//   // Function to check if cookies are accepted 
//   const areCookiesAccepted = () => {
//     // Check if the 'acceptedCookies' cookie is set
//     return Cookies.get('accepted')==="true";
//   };

//   // function check(){
//   //   let x=areCookiesAccepted()
//   //   setCookieValue(x)

//   // }

//   return (
//     <div>
//       <h2>Cookie Example</h2>
//       {!areCookiesAccepted() && ! CookieValue && (
//         <div>
//           <p>This website uses cookies to improve your experience.</p>
//           <button onClick={acceptCookies}>Accept Cookies</button>
//         </div>
//       ) 
//     }
//     { areCookiesAccepted() && CookieValue &&
//       (
//         <div>
//         <p>Cookies have been accepted. You can now use the website.</p>
//         <h1>{CookieValue}</h1>
//         </div>
//       )}
//       {/* <button onClick={check}>check</button>

//       { CookieValue && CookieValue.toString()} */}
//     </div>
//   );
// };

// export default CookieExample;


// import React, { useState, useEffect } from 'react';
// import Cookies from 'js-cookie';

// const CookieExample = () => {
//   const [cookieValue, setCookieValue] = useState(Cookies.get('accepted'));

//   // Function to accept cookies
//   const acceptCookies = () => {
//     // Set a cookie named 'accepted' with value 'true'
//     Cookies.set('accepted', 'true', { expires: 30 }); // expires in 30 days
//     alert('Cookies accepted!');
//     setCookieValue('true');
//   };

//   // Function to check if cookies are accepted
//   const areCookiesAccepted = () => {
//     return cookieValue === 'true';
//   };

//   useEffect(() => {
//     setCookieValue(Cookies.get('accepted'));
//   }, []);

//   return (
//     <div>
//       <h2>Cookie Example</h2>
//       {!areCookiesAccepted() && (
//         <div>
//           <p>This website uses cookies to improve your experience.</p>
//           <button onClick={acceptCookies}>Accept Cookies</button>
//         </div>
//       )}
//       {areCookiesAccepted() && (
//         <div>
//           <p>Cookies have been accepted. You can now use the website.</p>
//           <h1>{cookieValue}</h1>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CookieExample;


import React, { useState } from 'react';
import Cookies from 'js-cookie';

const CookieExample = () => {

  const [cookieValue, setCookieValue] = useState(Cookies.get('accepted'));
  const [showConsent, setShowConsent] = useState(false);


  // Function to accept cookies
  const acceptCookies = () => {
    // Set a cookie named 'accepted' with value 'any_non_null_value'
    Cookies.set('accepted', 'yes', { expires: 30 }); // expires in 30 days
    alert('Cookies accepted!');
    setCookieValue('yes');
    setShowConsent(false);
    localStorage.setItem('name', 'user 1');
    sessionStorage.setItem('name', 'user 2');
  };

  // Function to check if cookies are accepted
  const areCookiesAccepted = () => {
    return Cookies.get('accepted') !== undefined && Cookies.get('accepted') !== null;
  };

  // Delay showing the consent message by 3 seconds
  if (!showConsent && !areCookiesAccepted()) {
    setTimeout(() => {
      setShowConsent(true);
    }, 3000);
  }

  return (
    <div>
      <h2>Cookie Example</h2>
      {showConsent && !areCookiesAccepted() && (
        <div>
          <p>This website uses cookies to improve your experience.</p>
          <button onClick={acceptCookies}>Accept Cookies</button>
        </div>
      )}
      {areCookiesAccepted() && cookieValue && (
        <div>
          <p>Cookies have been accepted. You can now use the website.</p>
          <h1>{cookieValue}</h1>
        </div>
      )}
    </div>
  );
};

export default CookieExample;
