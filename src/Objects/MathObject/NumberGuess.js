import React, { useState } from 'react';

const NumberGuessingGame = () => {
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [randomNumber] = useState(Math.floor(Math.random() * 10) + 1);

  const handleGuess = () => {
    const guessedNumber = parseInt(guess);

    if (guessedNumber === randomNumber) {
      setFeedback(`Congratulations! You guessed the number in ${attempts} attempts.`);
    } else if (guessedNumber < randomNumber) {
      setFeedback('Too low! Try again.');
    } else {
      setFeedback('Too high! Try again.');
    }

    setGuess('');
    setAttempts(attempts + 1);
  };

  return (
    <div>
      <h1>Number Guessing Game</h1>
      <p>Guess a number between 1 and 100:</p>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        min="1"
        max="100"
      />
      <button onClick={handleGuess}>Guess</button>
      <p>{feedback}</p>
    </div>
  );
};

export default NumberGuessingGame;
