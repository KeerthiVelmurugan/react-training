import React, { useState } from 'react';

function SwappingArrays() {
  let [array1, setArray1] = useState([1, 2, 3]);
  let [array2, setArray2] = useState([5, 6, 7]);
  console.log([array1,array2])
  const swapArrays = () => {
    // Use destructuring to swap the arrays
    [array1, array2] = [array2, array1];
    console.log([array1,array2])

    // Update the state with the swapped arrays
    setArray1([...array1]);
    setArray2([...array2]);
  };

  return (
    <div>
      <h1>Array 1:</h1>
      <ul>
        {array1.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h1>Array 2:</h1>
      <ul>
        {array2.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <button onClick={swapArrays}>
        Swap Arrays
      </button>
    </div>
  );
}

export default SwappingArrays;
