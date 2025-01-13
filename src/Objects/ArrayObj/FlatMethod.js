import React from "react";
const FlatMethod = () => {
    const nestedArray = [[1, 2], [3, 4], [5, 6]];
    const flattenedArray = nestedArray.flat();
  
    return (
      <div>
        <h2>Flattened Array</h2>
        <ul>
          {flattenedArray.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
      </div>
    );
  };


  export default FlatMethod
  