import React, { useState } from 'react';

const MathTaskDice = () => {
  const [result, setResult] = useState(null);
  console.log(Math.cbrt(8))

  const rollDie = () => {
    // Generate a random number between 1 and 6 using the Math object
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setResult(randomNumber);
  };

  return (
    <div>
      <h2>Dice Roller</h2>
      <button onClick={rollDie}>Roll the Die</button>
      {result !== null && (
        <p>
          Result: {result}
          <img
            src={`https://www.dicebear.com/api/numeric/${result}.svg`}
            alt={`Dice ${result}`}
            style={{ width: '50px', height: '50px', marginLeft: '10px' }}
          />
        </p>
      )}
    </div>
  );
};

export default MathTaskDice;
