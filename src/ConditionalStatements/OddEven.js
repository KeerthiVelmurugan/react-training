import React, { useState } from 'react';

function OddEven() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    setNumber(e.target.value);
  };

//   const checkOddEven = () => {
//     const parsedNumber = parseInt(number);

//     if (isNaN(parsedNumber)) {
//       setResult('Please enter a valid number');
//     } else {
//       setResult(parsedNumber % 2 === 0 ? 'Even' : 'Odd');
//     }
//   };

  const checkOddEven = () => {
    console.log(typeof(number))
    if(number%2===0){
        setResult('Even')
    }
    else{
        setResult('Odd number')
    }
  }

  return (
    <div>
      <h2>Odd or Even Checker</h2>
      <label>
        Enter a number:
        <input type="text" value={number} onChange={handleInputChange} />
      </label>
      <button onClick={checkOddEven}>Check</button>
      <p>{result}</p>
    </div>
  );
}

export default OddEven;
