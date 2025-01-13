// import React, { useState, useEffect } from 'react';

// const TimerComponent = () => {
//   const [counter, setCounter] = useState(0);
//   const [intervalId, setIntervalId] = useState(null);

//   useEffect(() => {
//     // Start the interval when the component mounts
//     const id = setInterval(() => {
//       setCounter(prevCounter => prevCounter + 1);
//     }, 1000);

//     // Save the interval ID to state
//     setIntervalId(id);

//     // Clean up the interval when the component unmounts or when counter reaches a specific value
//     return () => {
//       clearInterval(id);
//     };
//   }, []);

//   // Stop the interval when counter reaches 10
//   useEffect(() => {
//     if (counter >= 10) {
//       clearInterval(intervalId);
//     }
//   }, [counter, intervalId]);

//   return (
//     <div>
//       <h1>Counter: {counter}</h1>
//     </div>
//   );
// };

// export default TimerComponent;


import React, { useState, useEffect } from 'react';

const TimerComponent = () => {
  const [counter, setCounter] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    // Start the interval when the component mounts
    const id = setInterval(() => {
      setCounter(prevCounter => prevCounter + 1);
    }, 1000);

    // Save the interval ID to state
    setIntervalId(id);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(id);
    };
  }, []);

  // Function to clear the interval
  const clearIntervalHandler = () => {
    clearInterval(intervalId);
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      {/* Button to clear the interval */}
      <button onClick={clearIntervalHandler}>Clear Interval</button>
    </div>
  );
};

export default TimerComponent;

