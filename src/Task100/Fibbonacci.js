import React, { useState } from 'react';

function Fibonacci() {
  const [seriesLength, setSeriesLength] = useState(10); // Initial series length
  const [fibonacciSeries, setFibonacciSeries] = useState([]);

  // Function to generate Fibonacci series
  const generateFibonacciSeries = (length) => {
    const series = [];
    let a = 0, b = 1;

    for (let i = 0; i < length; i++) {
      series.push(a);
      let temp = a;
      a = b;
      b = temp + b;
    }

    return series;
  };

  // Handler for input change
  const handleInputChange = (e) => {
    const value = parseInt(e.target.value);
    setSeriesLength(value);
    setFibonacciSeries(generateFibonacciSeries(value));
  };

  return (
    <div>
      <h2>Fibonacci Series</h2>
      <label>Series Length: </label>
      <input type="number" value={seriesLength} onChange={handleInputChange} />
      <ul>
        {fibonacciSeries.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default Fibonacci;
