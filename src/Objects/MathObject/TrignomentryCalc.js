import React, { useState } from 'react';

const TrigonometryCalculator = () => {
  const [angle, setAngle] = useState('');
  const [sin, setSin] = useState(null);
  const [cos, setCos] = useState(null);
  const [tan, setTan] = useState(null);

  const calculateTrigonometry = () => {
    const angleInDegrees = parseFloat(angle);
    if (!isNaN(angleInDegrees)) {
      const angleInRadians = (angleInDegrees * Math.PI) / 180;
      setSin(Math.sin(angleInRadians).toFixed(4));
      setCos(Math.cos(angleInRadians).toFixed(4));
      setTan(Math.tan(angleInRadians).toFixed(4));
    }
  };

  return (
    <div>
      <h1>Trigonometry Calculator</h1>
      <input
        type="number"
        value={angle}
        onChange={(e) => setAngle(e.target.value)}
        placeholder="Enter angle in degrees"
      />
      <button onClick={calculateTrigonometry}>Calculate</button>
      {sin !== null && (
        <div>
          <p>Sine: {sin}</p>
          <p>Cosine: {cos}</p>
          <p>Tangent: {tan}</p>
        </div>
      )}
    </div>
  );
};

export default TrigonometryCalculator;
