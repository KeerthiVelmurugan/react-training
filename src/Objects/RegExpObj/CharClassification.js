import React, { useState } from 'react';

function CharacterClassifier() {
  const [inputChar, setInputChar] = useState('');
  const [charType, setCharType] = useState('');

  const handleInputChange = (event) => {
    const char = event.target.value.charAt(0);
    setInputChar(char);

    if (char.match(/[A-Z]/)) {
      setCharType('Uppercase Letter');
    } else if (char.match(/[a-z]/)) {
      setCharType('Lowercase Letter');
    } else if (char.match(/[0-9]/)) {
      setCharType('Digit');
    } else {
      setCharType('Special Character');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputChar}
        onChange={handleInputChange}
        placeholder="Enter a character"
      />
      {inputChar && (
        <p>
          <strong>{inputChar}</strong> is a {charType}
        </p>
      )}
    </div>
  );
}

export default CharacterClassifier;
