import React, { useState } from 'react';
import SquareCalculator from './Square';

const SquareUseMemo = () => {
  const [inputValue, setInputValue] = useState(0);

  return (
    <div>
      <label>
        Enter a number for square calculation:
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(parseInt(e.target.value))}
        />
      </label>
      <SquareCalculator number={inputValue} />
    </div>
  );
};

export default SquareUseMemo
