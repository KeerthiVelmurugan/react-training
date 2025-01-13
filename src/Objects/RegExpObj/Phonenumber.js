import React, { useState } from 'react';

const Phonenumber = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (e) => {
    let inputNumber = e.target.value;

    // Remove all non-digit characters from the input
    inputNumber = inputNumber.replace(/\D/g, '');

    // Check for US phone number format (10 digits) and apply formatting
    if (/^(\d{3})(\d{3})(\d{4})$/.test(inputNumber)) {
      // inputNumber = inputNumber.replace(/^(\d{3})(\d{3})(\d{4})$/, '($1) $2-$3');
      inputNumber = inputNumber.replace(/(\d{3})(\d{3})(\d{4})/, (match,p1,p2,p3) => {
        return `(${p1}) ${p2}-${p3}`;
      });
      
    } else {
      // Default: no formatting
    }

    // Update the state with the formatted phone number
    setPhoneNumber(inputNumber);
  };

  return (
    <div>
      <label htmlFor="phone">Phone Number:</label>
      <input
        type="text"
        id="phone"
        name="phone"
        placeholder="(123) 456-7890"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
    </div>
  );
};

export default Phonenumber;

