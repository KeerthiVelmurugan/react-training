// src/Game.js
import React, { useState } from 'react';

const GuessGame = () => {
  const [number, setNumber] = useState(Math.floor(Math.random() * 10) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  const handleGuess = () => {
    const guessNumber = parseInt(guess);
    if (isNaN(guessNumber)) {
      setMessage('Please enter a valid number.');
      setGuess('')
    } else if (guessNumber < number) {
      setMessage('Too low!');
      setGuess('')
    } else if (guessNumber > number) {
    
      setMessage('Too high!');
      setGuess('')
    } else {
      setMessage('Congratulations! You guessed it!');
    }
  };

  const handleInputChange = (event) => {
    setGuess(event.target.value);
  };

  return (
    <div>
      <h1>Guess the Number</h1>
      <input
        type="text"
        value={guess}
        onChange={handleInputChange}
      />
      <button onClick={handleGuess}>Guess</button>
      <p>{message}</p>
    </div>
  );
};

export default GuessGame;
