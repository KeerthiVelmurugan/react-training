import React, { useState } from 'react';

function LcmCalculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [lcmResult, setLcmResult] = useState('');

  const calculateLcm = () => {
    const number1 = parseInt(num1);
    const number2 = parseInt(num2);

    if (Number.isNaN(number1) || Number.isNaN(number2)) {
      setLcmResult('Please enter valid numbers');
      return;
    }

    // Function to find the LCM
    const findLcm = (a, b) => {
      let max = Math.max(a, b);
      while (true) {
        if (max % a === 0 && max % b === 0) {
          return max;
        }
        max++;
      }
    };

    const lcm = findLcm(number1, number2);
    setLcmResult(`LCM of ${number1} and ${number2} is: ${lcm}`);
  };

  return (
    <div>
      <h2>LCM Calculator</h2>
      <div>
        <label>
          Number 1:
          <input type="number" value={num1} onChange={e => setNum1(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Number 2:
          <input type="number" value={num2} onChange={e => setNum2(e.target.value)} />
        </label>
      </div>
      <button onClick={calculateLcm}>Calculate LCM</button>
      <div>{lcmResult}</div>
    </div>
  );
}

export default LcmCalculator;
