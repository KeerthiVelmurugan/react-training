import React, { useState } from 'react';

function PasswordValidation1() {
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    // Define the password validation pattern
    // const passwordPattern = /^(?=.[A-Z]*)(?=.[!@#$%^&*]*)(?=.[0-9]*).{8,}$/;  wrong pattern
    const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/


    // Check if the entered password matches the pattern
    setIsValid(passwordPattern.test(newPassword));
  };

  return (
    <div>
      <label>
        Enter Password:
        <input type="text" value={password} onChange={handlePasswordChange} />
      </label>
      <p>Password is {isValid ? 'valid' : 'invalid'}.</p>
    </div>
  );
}

export default PasswordValidation1;
