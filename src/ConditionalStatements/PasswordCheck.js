import React, { useState } from 'react';

const PasswordCheck = () => {
  const [password, setPassword] = useState('keerthi');
  const [authenticated, setAuthenticated] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const correctPassword = 'password123';

  const handleSubmit = (e) => {
    e.preventDefault();
    let attempts = 3; // Maximum number of attempts
    while (attempts > 0 && !authenticated) {
      if (password === correctPassword) {
        setAuthenticated(true);
        setErrorMessage('');
      } else {
        attempts--;
        setErrorMessage(`Incorrect password. ${attempts} attempts left.`);
        setPassword('');
      }
    }
    if (!authenticated) {
      setErrorMessage('Maximum attempts reached. Please try again later.');
    }
  };

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      {authenticated ? (
        <h2>Password accepted. You're logged in!</h2>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handleChange}
          />
          <button type="submit">Login</button>
        </form>
      )}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default PasswordCheck;
