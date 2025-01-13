import React, { useState } from 'react';

function GuessNumberGame() {
  const [randomNumber] = useState(Math.floor(Math.random() * 10) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  const handleGuess = () => {
    let attempts = 1;
    let guessedCorrectly = false;
    // const randomNumber = Math.floor(Math.random() * 10) + 1;

     console.log(randomNumber)

    while (!guessedCorrectly) {
    //   const randomNumber = Math.floor(Math.random() * 10) + 1;

    // console.log(randomNumber)
      const userGuess = parseInt(prompt('Guess a number between 1 and 10:'));

      if (userGuess === randomNumber) {
        setMessage(`Congratulations! You guessed the number in ${attempts} attempts.`);
        guessedCorrectly = true;
      } else {
        setMessage('Incorrect guess. Try again.');
        attempts++;
      }
    }
  };

  return (
    <div>
      <h2>Guess the Number Game</h2>
      <button onClick={handleGuess}>Start Game</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default GuessNumberGame;
