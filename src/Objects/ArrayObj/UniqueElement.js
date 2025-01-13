import React from 'react';
import { object } from 'yup';

function UniqueElement() {
  const originalArray = [1, 2, 3, 4, 1, 2, 5, 6, 7, 8, 7, 9];

  // Count occurrences of each element
  const elementCounts = {};
  console.log(elementCounts)
  originalArray.forEach((element) => {
    elementCounts[element] = (elementCounts[element] || 0) + 1;
  });

  

  // Filter unique elements that appear more than once
  const uniqueArray = Object.keys(elementCounts).filter((element) => elementCounts[element] === 1);
  const dupArray = Object.keys(elementCounts).filter((element) => elementCounts[element] > 1);

  return (
    <div>
      <p>Original Array: {originalArray.join(', ')}</p>
      <p>Filtered Unique Elements: {uniqueArray.join(', ')}</p>
      <p>Filtered Duplicate Elements: {dupArray.join(', ')}</p>
    </div>
  );
}

export default UniqueElement;
