import React, { useState } from 'react';

const StringManipulation = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInput(value);
    setResult(getNewString(value));
  };

  const getNewString = (str) => {
    if (str.length < 2) {
      return '';
    }
    return str.slice(0, 2) + str.slice(-2);
  };

  return (
    <div>
      <h1>String Manipulation</h1>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter a string"
      />
      <p>Result: {result}</p>
    </div>
  );
};

export default StringManipulation;
