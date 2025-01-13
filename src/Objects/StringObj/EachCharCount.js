import React, { useState } from 'react';

function CharacterCounterEach() {
  const [word, setWord] = useState('');
  const [charCount, setCharCount] = useState({});

  const handleInputChange = (event) => {
    const word = event.target.value;
    const charCount = countCharacters(word);
    setWord(word);
    setCharCount(charCount);
  };

  const countCharacters = (word) => {
    const charCount = {};
    console.log(charCount)
    for (const char of word) {
      charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }
    return charCount;
  };

  return (
    <div>
      <input
        type="text"
        value={word}
        onChange={handleInputChange}
        placeholder="Enter a word"
      />
      <div>
        {Object.entries(charCount).map(([char, count]) => (
          <p key={char}>
            '{char}' occurs {count} time(s)
          </p>
        ))}
      </div>
    </div>
  );
}

export default CharacterCounterEach;
