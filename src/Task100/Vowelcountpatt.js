import React, { useState } from 'react';

function VowelCounter1() {
  const [inputString, setInputString] = useState('');
  const [vowelCount, setVowelCount] = useState(0);

  const countVowels = (str) => {
    // Match all vowels (case insensitive) using regex and count them
    const matches = str.match(/[aeiou]/gi);
    console.log(str.match(/[aeiou]/gi))
    return matches ? matches.length : 0;
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setInputString(value);
    const count = countVowels(value);
    setVowelCount(count);
  };

  return (
    <div>
      <h2>Vowel Counter</h2>
      <input
        type="text"
        value={inputString}
        onChange={handleChange}
        placeholder="Enter a string..."
      />
      <p>Number of vowels: {vowelCount}</p>
    </div>
  );
}

export default VowelCounter1;
