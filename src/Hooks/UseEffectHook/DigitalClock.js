import React, { useState, useEffect } from 'react';
import './DigitalClock.css'; // Optional: for styling

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timerId);
  }, []);

  return (
    <div style={styles.clock}>
      <h1>{time.toLocaleTimeString()}</h1>
      <p>{time.toLocaleDateString()}</p>
    </div>
  );
};

// Styles for the clock component
const styles = {
  clock: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#282c34',
    color: 'white',
  },
};

export default DigitalClock
