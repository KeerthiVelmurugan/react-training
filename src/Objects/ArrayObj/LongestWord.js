import React, { useState } from 'react';

const LongestWordFinder = () => {
  const [input, setInput] = useState('');
  const [longestWord, setLongestWord] = useState('');

  const findLongestWord = (sentence) => {
    const words = sentence.split(' ');
    let longestWord = '';

    for (const word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }

    return longestWord;
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLongestWord(findLongestWord(input));
  };

  return (
    <div>
      <h1>Find the Longest Word</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a sentence:
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="e.g. The quick brown fox jumped over the lazy dog"
          />
        </label>
        <button type="submit">Find Longest Word</button>
      </form>

      {longestWord && (
        <div>
          <h2>Longest Word</h2>
          <p>{longestWord}</p>
        </div>
      )}
    </div>
  );
};

export default LongestWordFinder;
