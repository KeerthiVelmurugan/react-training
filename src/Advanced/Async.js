import React, { useState, useEffect } from 'react';

const AsyncTimer = () => {
  const [count, setCount] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCount(prevCount => prevCount + 1);
//     }, 1000);

//     // Cleanup interval on component unmount
//     return () => clearInterval(intervalId);
//   }, []);

// Function to be called every 2 seconds
function greet() {
    console.log('Hello, World!');
  }
  
  // Call the greet function every 2000 milliseconds (2 seconds)
  const intervalId = setInterval(greet, 2000);
  
  // To stop the interval after 10 seconds
  setTimeout(() => {
    clearInterval(intervalId);
    console.log('Interval stopped');
  }, 10000);
  

  return (
    <div>
      <h1>Timer: {count}</h1>
    </div>
  );
};

export default AsyncTimer;
  