import React, { useState } from 'react';

function TrafficLights() {
  const [light, setLight] = useState('red');

  const changeLight = () => {
    if (light === 'red') {
      setLight('yellow');
    } else if (light === 'yellow') {
      setLight('green');
    } else {
      setLight('red');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div style={{ height: '100px', width: '100px', borderRadius: '50%', backgroundColor: light === 'red' ? 'red' : 'gray', margin: '10px auto' }}></div>
      <div style={{ height: '100px', width: '100px', borderRadius: '50%', backgroundColor: light === 'yellow' ? 'yellow' : 'gray', margin: '10px auto' }}></div>
      <div style={{ height: '100px', width: '100px', borderRadius: '50%', backgroundColor: light === 'green' ? 'green' : 'gray', margin: '10px auto' }}></div>
      <button onClick={changeLight} style={{ padding: '10px 20px', marginTop: '20px' }}>Change Light</button>
    </div>
  );
}

export default TrafficLights;
