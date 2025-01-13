import React, { useState } from 'react';

const ReplaceCharacter = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInput(value);
    setResult(replaceChar(value));
  };

  const replaceChar = (str) => {
    if (str.length === 0) {
      return '';
    }

    const firstChar = str[0];
    // Initialize result with the first character unchanged
    let result = firstChar;

    // Iterate through the rest of the string and replace characters
    for (let i = 1; i < str.length; i++) {
      if (str[i] === firstChar) {
        result += '$';
      } else {
        result += str[i];
      }
    }

    return result;
  };

  return (
    <div>
      <h1>Replace Character</h1>
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

export default ReplaceCharacter;
