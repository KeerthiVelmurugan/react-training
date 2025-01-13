import React, { useState } from 'react';

const SquareCalculator = ({ number }) => {
  const calculateSquare = (num) => {
    console.log(`Calculating square for ${num}`);
    return num * num;
  };

  // Without useMemo, the square calculation will run on every render
  const square = calculateSquare(number);

  return (
    <div>
      <p>Square of {number}: {square}</p>
    </div>
  );
};

export default SquareCalculator
