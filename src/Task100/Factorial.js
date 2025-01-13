import React, { useState } from 'react';

function FactorialCalculator() {
  const [number, setNumber] = useState('');
  const [factorial, setFactorial] = useState(null);

  const calculateFactorial = () => {
    const num = parseInt(number);
    if (isNaN(num)) {
      alert('Please enter a valid number');
      return;
    }
    if (num < 0) {
      alert('Please enter a non-negative number');
      return;
    }
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    setFactorial(result);
  };

  return (
    <div>
      <h1>Factorial Calculator</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={calculateFactorial}>Calculate Factorial</button>
      {factorial !== null && (
        <p>
          The factorial of {number} is {factorial}
        </p>
      )}
    </div>
  );
}

export default FactorialCalculator;
