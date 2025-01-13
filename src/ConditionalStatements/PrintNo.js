import React, { useState } from 'react';

function PrintNo() {
  const [n, setN] = useState(10); 
  const [naturalNumbers, setNaturalNumbers] = useState([]);

  const printNumbers = () => {
    let currentNumber = 1;
    const numbers = [];

    while (currentNumber <= n) {
      numbers.push(currentNumber);
      currentNumber++;
    }

    setNaturalNumbers(numbers);
  };

  return (
    <div>
      <label>
        Enter a value for n:
        <input
          type="number"
          value={n}
          onChange={(e) => setN(parseInt(e.target.value))}
        />
      </label>
      <button onClick={printNumbers}>Print Natural Numbers</button>

      <h3>Natural Numbers:</h3>
      <ul>
        {naturalNumbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default PrintNo;
