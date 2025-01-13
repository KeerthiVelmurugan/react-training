import React, { useState } from 'react';

const CharacterCount = () => {
  const [inputString, setInputString] = useState('');

  const countCharacters = (str) => {
    // Use regex to remove spaces and count characters
    const characterCount = str.replace(/\s/g, '').length;
    return characterCount;
  };

  const totalCharacters = countCharacters(inputString);

  return (
    <div>
      <label>
        Enter a string:
        <input
          type="text"
          value={inputString}
          onChange={(e) => setInputString(e.target.value)}
        />
      </label>
      <p>Total characters (excluding spaces): {totalCharacters}</p>
    </div>
  );
};

export default CharacterCount;
