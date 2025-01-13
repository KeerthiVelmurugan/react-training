// // src/SignIn.js
// import React from 'react';
// import { signInWithPopup } from "firebase/auth";
// import { auth, provider } from "./firebaseConfig";
// import { useNavigate } from 'react-router-dom';

// const SignIn = () => {

//   let nav = useNavigate()
//   const signInWithGoogle = () => {
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         // User signed in successfully
//         const user = result.user;
//         console.log('User info:', user);
//       })
//       .catch((error) => {
//         // Handle Errors here.
//         console.error('Error signing in:', error);
//       });
//       nav('/simplevalidation')
//   };

//   return (
//     <div>
//       <button onClick={signInWithGoogle}>Sign in with Google</button>
//     </div>
//   );
// };

// export default SignIn;
