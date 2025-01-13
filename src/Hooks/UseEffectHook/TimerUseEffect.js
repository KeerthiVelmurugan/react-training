import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds -1);
    }, 1000);

    // Cleanup function
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      <h2>Timer: {seconds} seconds</h2>
    </div>
  );
}

export default Timer;


