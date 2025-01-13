import React, { useState } from 'react';

const GreatestNumber = () => {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [number3, setNumber3] = useState();
  const [number4, setNumber4] = useState();
  const [greatestNumber, setGreatestNumber] = useState('');

  const handleCalculate = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    const num3 = parseFloat(number3);
    const num4 = parseFloat(number4);
    console.log(typeof(number1))

    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3) && !isNaN(num4)) {
      if (num1 > num2 && num1 > num3 && num1 > num4) {
        setGreatestNumber(num1);
      } else if (num2 > num3 && num2 > num4) {
        setGreatestNumber(num2);
      } else if (num3 > num4) {
        setGreatestNumber(num3);
      } else {
        setGreatestNumber(num4);
      }
    } else {
      setGreatestNumber('Invalid input');
    }
  };

  return (
    <div>
      <h2>Greatest Number</h2>
      <div>
        <label>Number 1:</label>
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
        />
      </div>
      <div>
        <label>Number 2:</label>
        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
        />
      </div>
      <div>
        <label>Number 3:</label>
        <input
          type="number"
          value={number3}
          onChange={(e) => setNumber3(e.target.value)}
        />
      </div>
      <div>
        <label>Number 4:</label>
        <input
          type="number"
          value={number4}
          onChange={(e) => setNumber4(e.target.value)}
        />
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      <p>Greatest Number: {greatestNumber}</p>
    </div>
  );
};

export default GreatestNumber;
