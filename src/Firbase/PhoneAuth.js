import React, { useState, useEffect } from 'react';
import { getAuth, PhoneAuthProvider, RecaptchaVerifier, signInWithCredential, signInWithPhoneNumber } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

// Your Firebase configuration
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

const PhoneAuth = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [verificationId, setVerificationId] = useState(null);

  // Setup reCAPTCHA verifier
  useEffect(() => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        'size': 'invisible',
        'callback': (response) => {
          console.log('Recaptcha verified');
        },
        'expired-callback': () => {
          console.log('Recaptcha expired, please reset.');
        },
      }, auth);
    }
  }, [auth]);

  const onSignInSubmit = (e) => {
    e.preventDefault();
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        setVerificationId(confirmationResult.verificationId);
        console.log('OTP sent successfully');
      })
      .catch((error) => {
        console.error('Error sending OTP:', error);
      });
  };

  const verifyCode = (e) => {
    e.preventDefault();
    if (verificationId) {
      const credential = PhoneAuthProvider.credential(verificationId, otp);
      signInWithCredential(auth, credential)
        .then((result) => {
          console.log('Phone number verified and user signed in:', result.user);
        })
        .catch((error) => {
          console.error('Error verifying code:', error);
        });
    }
  };

  return (
    <div>
      <h2>Phone Authentication</h2>
      <form onSubmit={onSignInSubmit}>
        <input
          type="tel"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button type="submit">Send OTP</button>
        <div id="recaptcha-container"></div>
      </form>

      <form onSubmit={verifyCode}>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <button type="submit">Verify OTP</button>
      </form>
    </div>
  );
};

export default PhoneAuth;