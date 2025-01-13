import React, { useState } from 'react';


const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');
  const [criteria, setCriteria] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false,
  });

  const checkPasswordStrength = (password) => {
    const lengthCriteria = password.length >= 8;
    const uppercaseCriteria = /[A-Z]/.test(password);
    const lowercaseCriteria = /[a-z]/.test(password);
    const numberCriteria = /\d/.test(password);
    const specialCriteria = /[\W_]/.test(password);

    const criteriaMet = [
      lengthCriteria,
      uppercaseCriteria,
      lowercaseCriteria,
      numberCriteria,
      specialCriteria,
    ].filter(Boolean).length;

    let strength = '';
    if (criteriaMet === 5) {
      strength = 'Very Strong';
    } else if (criteriaMet === 4) {
      strength = 'Strong';
    } else if (criteriaMet === 3) {
      strength = 'Moderate';
    } else if (criteriaMet === 2) {
      strength = 'Weak';
    } else {
      strength = 'Very Weak';
    }

    setCriteria({
      length: lengthCriteria,
      uppercase: uppercaseCriteria,
      lowercase: lowercaseCriteria,
      number: numberCriteria,
      special: specialCriteria,
    });

    setStrength(strength);
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    checkPasswordStrength(newPassword);
  };

  return (
    <div className="App">
      <h1>Password Strength Checker</h1>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter your password"
      />
      <div>
        <p>Password Strength: {strength}</p>
        <ul>
          <li>Length (8+ characters): {criteria.length ? 'Yes' : 'No'}</li>
          <li>Uppercase Letter: {criteria.uppercase ? 'Yes' : 'No'}</li>
          <li>Lowercase Letter: {criteria.lowercase ? 'Yes' : 'No'}</li>
          <li>Number: {criteria.number ? 'Yes' : 'No'}</li>
          <li>Special Character: {criteria.special ? 'Yes' : 'No'}</li>
        </ul>
      </div>
    </div>
  );
};

export default PasswordStrengthChecker;
