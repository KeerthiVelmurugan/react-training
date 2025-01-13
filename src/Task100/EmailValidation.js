import React, { useState } from 'react';

const EmailValidationExample = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    // Regular expression for validating email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let em=/^[a-z0-9]+@[a-zA-z]+\.[a-z]$/
    let ep = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/
    let no = /^\d{10}/

    // Check if the input email matches the pattern
    setIsValid(no.test(inputEmail));
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleInputChange}
        style={{ border: isValid ? '1px solid black' : '1px solid red' }}
      />
      {!isValid && <p style={{ color: 'red' }}>Please enter a valid email address.</p>}
    </div>
  );
};

export default EmailValidationExample;
