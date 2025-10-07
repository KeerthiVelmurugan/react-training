// src/Login.js
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from "firebase/auth";
import {  provider } from "./firebaseConfig";

const LoginForOthers = () => {
    let nav = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      nav('/CRUD')
      console.log('User signed in:', user);
      alert("signed in")
    } catch (error) {
      setError(error.message);
      console.error('Error during login:', error.message);
    }
    
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // User signed in successfully
        const user = result.user;
        console.log('User info:', user);
      })
      .catch((error) => {
        // Handle Errors here.
        console.error('Error signing in:', error);
      });
      nav('/CRUD')
  };

  return (
    <div>
      <h2>Login with Email and Password</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default LoginForOthers;
