import React, { useState } from 'react';

function PasswordValidation() {
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsValid(validatePassword(newPassword));
  };

  const validatePassword = (password) => {
   // const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!#$%&*])[A-Za-z\d@!#$%&*]{8,}$/;  or /^(?=[A-Za-z0-9!@#$%^&*]{7,})$/
    
    const passwordPattern =/^(?=[A-Za-z0-9!@#$%^&*].{7,})$/;
    return passwordPattern.test(password);
  };

  return (
    <div>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      {!isValid && (
        <p style={{ color: 'red' }}>
          Password must contain at least one alphabet, one digit, one special character, and be at least 8 characters long.
        </p>
      )}
    </div>
  );
}

export default PasswordValidation;
