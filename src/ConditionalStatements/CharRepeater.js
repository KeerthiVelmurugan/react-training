import React, { useState } from 'react';

function CharacterRepeater() {
  const [character, setCharacter] = useState('');
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState('');

  const handleCharacterChange = (e) => {
    setCharacter(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(repeatCharacter(character, Number(number)));
  };

  const repeatCharacter = (char, num) => {
    let repeatedString = '';
    for (let i = 0; i < num; i++) {
      repeatedString += char;
    }
    return repeatedString;
  };

  return (
    <div>
      <h1>Character Repeater</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Character:
            <input type="text" value={character} onChange={handleCharacterChange} maxLength="1" />
          </label>
        </div>
        <div>
          <label>
            Number:
            <input type="number" value={number} onChange={handleNumberChange} min="0" />
          </label>
        </div>
        <button type="submit">Repeat</button>
      </form>
      <div>
        <h2>Result:</h2>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default CharacterRepeater;
