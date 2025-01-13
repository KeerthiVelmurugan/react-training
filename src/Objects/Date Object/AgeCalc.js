import React, { useState } from 'react';

const AgeCalc = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthYear = new Date(birthDate).getFullYear();
    const currentYear = new Date().getFullYear();
    const calculatedAge = currentYear - birthYear;

    setAge(calculatedAge);
  };

  return (
    <div>
      <h1>Age Calculator</h1>
      <label htmlFor="birthDate">Enter your birthdate:</label>
      <input
        type="date"
        id="birthDate"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      <button onClick={calculateAge}>Calculate Age</button>
      
      {age !== null && (
        <div>
          <h2>Your age is: {age} years</h2>
        </div>
      )}
      
    </div>
  );
};


export default AgeCalc;
