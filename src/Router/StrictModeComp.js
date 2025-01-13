import React, { useState } from "react";

let externalCounter = 0; // Global state outside React

const StrictModeComp = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    externalCounter += 1; // Modifying global variable (impure action)
    setCount(externalCounter); // Setting React state based on it
  };

  console.log("External Counter:", externalCounter); // Detected by Strict Mode

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
};

export default StrictModeComp;
