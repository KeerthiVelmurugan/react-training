import React, { useState } from 'react';

function VowelCounter() {
  const [inputString, setInputString] = useState('');
  const [vowelCount, setVowelCount] = useState(0);

  const countVowels = (str) => {
    str = str.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let char in str) {
      if (vowels.includes(str[char])) {
        count++;
      }
    }

    return count;
  };

  const handleInputChange = (event) => {
    setInputString(event.target.value);
  };

  const handleCountVowels = () => {
    const count = countVowels(inputString);
    setVowelCount(count);
  };

  return (
    <div>
      <h2>Vowel Counter</h2>
      <div>
        <label>
          Enter a string:
          <input type="text" value={inputString} onChange={handleInputChange} />
        </label>
      </div>
      <button onClick={handleCountVowels}>Count Vowels</button>
      <div>
        {vowelCount > 0 && (
          <p>Number of vowels in the string: {vowelCount}</p>
        )}
      </div>
    </div>
  );
}

export default VowelCounter;
