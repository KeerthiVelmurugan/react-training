import React, { useState } from 'react';

function ArmstrongChecker() {
  const [number, setNumber] = useState('');
  const [isArmstrong, setIsArmstrong] = useState(false);

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  const checkArmstrong = () => {
    let numDigits = number.length;
    let sum = 0;

    for (let digit of number) {
      sum += Math.pow(parseInt(digit), numDigits);
    }

    setIsArmstrong(sum === parseInt(number));
  };

  return (
    <div>
      <h2>Armstrong Number Checker</h2>
      <input
        type="text"
        value={number}
        onChange={handleChange}
        placeholder="Enter a number"
      />
      <button onClick={checkArmstrong}>Check</button>
      <p>
        {isArmstrong
          ? `${number} is an Armstrong number.`
          : `${number} is not an Armstrong number.`}
      </p>
    </div>
  );
}

export default ArmstrongChecker;
