import React, { useState, useMemo } from 'react';

const FibonacciCalculator = ({ n }) => {
  const calculateFibonacci = (num) => {
    if (num <= 1) {
      return num;
    }
    return calculateFibonacci(num - 1) + calculateFibonacci(num - 2);
  };

  // useMemo hook is used to memoize the result of the calculation
  const memoizedResult = useMemo(() => calculateFibonacci(n), [n]);

  return (
    <div>
      <h2>Fibonacci Calculator</h2>
      <p>Fibonacci number at position {n}: {memoizedResult}</p>
    </div>
  );
};

export default FibonacciCalculator;
