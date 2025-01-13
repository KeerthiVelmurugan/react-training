import React, { useState, useEffect } from 'react';

function SumofArray() {
  // State to store the array and sum
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  // Handler for input changes
  const handleInputChange = (event) => {
    const inputValue = parseInt(event.target.value, 10) || 0;
    setNumbers([...numbers, inputValue]);
  };

  useEffect(() => {
    // Calculate the sum using a for loop
    let tempSum = 0;
    for (let i = 0; i < numbers.length; i++) {
      tempSum += numbers[i];
    }

    // Update the state with the calculated sum
    setSum(tempSum);
  }, [numbers]);

  return (
    <div>
      <label>
        Enter a number:
        <input type="number" onChange={handleInputChange} />
      </label>

      <p>Array: {numbers.join(', ')}</p>
      <p>Sum of array elements: {sum}</p>
    </div>
  );
}

export default SumofArray;
