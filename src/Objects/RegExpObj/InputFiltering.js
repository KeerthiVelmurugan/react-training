import React, { useState } from 'react';

function CharacterInputRestriction() {
  const [alphaInput, setAlphaInput] = useState('');
  const [numericInput, setNumericInput] = useState('');
  const [alphaNumericInput, setAlphaNumericInput] = useState('');

  const handleAlphaInputChange = (event) => {
    const { value } = event.target;
    // Only allow alphabets (uppercase and lowercase)
    if (/^[A-Za-z]*$/.test(value) || value === '') {
      setAlphaInput(value);
    }
  };

  const handleNumericInputChange = (event) => {
    const { value } = event.target;
    // Only allow numbers
    if (/^[0-9]*$/.test(value) || value === '') {
      setNumericInput(value);
    }
  };

  const handleAlphaNumericInputChange = (event) => {
    const { value } = event.target;
    // Only allow alphabets and numbers
    if (/^[A-Za-z0-9]*$/.test(value) || value === '') {
      setAlphaNumericInput(value);
    }
  };

  return (
    <div>
      <h2>Character Input Restriction</h2>
      <div>
        <label>Alphabets Only:</label>
        <input type="text" value={alphaInput} onChange={handleAlphaInputChange} />
      </div>
      <div>
        <label>Numbers Only:</label>
        <input type="text" value={numericInput} onChange={handleNumericInputChange} />
      </div>
      <div>
        <label>Alphabets and Numbers:</label>
        <input type="text" value={alphaNumericInput} onChange={handleAlphaNumericInputChange} />
      </div>
    </div>
  );
}

export default CharacterInputRestriction;
