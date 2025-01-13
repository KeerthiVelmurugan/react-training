import React, { useState } from 'react';

function FibonacciSeries() {
  const [n, setN] = useState('');
  const [fibonacciSeries, setFibonacciSeries] = useState([]);

  const generateFibonacci = () => {
    const num = parseInt(n);
    if (isNaN(num) || num <= 0) {
      setFibonacciSeries([]);
      return;
    }

    let fib = [];
    fib[0] = 0;
    fib[1] = 1;
    for (let i = 2; i < num; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    setFibonacciSeries(fib);
  };

  return (
    <div>
      <h2>Fibonacci Series</h2>
      <div>
        <label>
          Enter the value of n:
          <input type="number" value={n} onChange={(e) => setN(e.target.value)} />
        </label>
      </div>
      <button onClick={generateFibonacci}>Generate Fibonacci Series</button>
      <div>
        {fibonacciSeries.length > 0 ? (
          <p>
            Fibonacci Series upto {n} terms: {fibonacciSeries.join(', ')}
          </p>
        ) : (
          <p>Please enter a valid positive integer for n.</p>
        )}
      </div>
    </div>
  );
}

export default FibonacciSeries;
