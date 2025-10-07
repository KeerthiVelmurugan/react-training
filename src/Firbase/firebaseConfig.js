// // firebaseConfig.js
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "your-api-key",
//   authDomain: "your-app.firebaseapp.com",
//   projectId: "your-project-id",
//   storageBucket: "your-app.appspot.com",
//   messagingSenderId: "your-messaging-sender-id",
//   appId: "your-app-id"
// };

// const app = initializeApp(firebaseConfig);

// export default app;
// src/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, RecaptchaVerifier, signInWithPhoneNumber, PhoneAuthProvider } from "firebase/auth";
import { getDatabase } from 'firebase/database';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAkxGKEvpG7VdIqRm8NMLl1d2P8am4XkT8",
    authDomain: "crm-app-5bkj.firebaseapp.com",
    projectId: "crm-app-5bkj",
    storageBucket: "crm-app-5bkj.appspot.com",
    messagingSenderId: "1071472485752",
    appId: "1:1071472485752:web:bce3c519011fcbdb1a148d",
    measurementId: "G-S4FY3P6BVY"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
// export const db = getDatabase(app);
export const db = getFirestore(app);
// export const storage = getStorage(app);

export { auth, provider };
