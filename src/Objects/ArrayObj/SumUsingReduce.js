import React from 'react';

const SumUsingReduce = () => {
  // Your array of numbers
  const numbers = [1, 2, 3, 4, 5];

  // Calculate the sum using the reduce method
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);

//   let sum = 0;

//   // Iterate through each element using forEach
//   numbers.forEach((number) => {
//     sum += number;
//   });

  return (
    <div>
      <p>Array: {numbers.join(', ')}</p>
      <p>Sum of all elements: {sum}</p>
    </div>
  );
}

export default SumUsingReduce;
