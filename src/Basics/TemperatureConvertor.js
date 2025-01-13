import React, { useState } from 'react';

const TemperatureConverter = () => {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('Celsius');
  const [convertedTemperature, setConvertedTemperature] = useState(null);
  const [error, setError] = useState(null);

  const convertTemperature = () => {
    try {
      const parsedTemperature = parseFloat(temperature);

      if (isNaN(parsedTemperature)) {
        throw new Error('Please enter a valid number for temperature.');
      }

      if (scale === 'Celsius') {
        const fahrenheit = (parsedTemperature * 9/5) + 32;
        setConvertedTemperature(fahrenheit.toFixed(2) + '°F');
      } else {
        const celsius = (parsedTemperature - 32) * 5/9;
        setConvertedTemperature(celsius.toFixed(2) + '°C');
      }

      setError(null); // Clear any previous errors
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Temperature Converter</h2>
      <label>
        Enter temperature:
        <input
          type="text"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
        />
      </label>
      <label>
        Select scale:
        <select
          value={scale}
          onChange={(e) => setScale(e.target.value)}
        >
          <option value="Celsius">Celsius</option>
          <option value="Fahrenheit">Fahrenheit</option>
        </select>
      </label>
      <button onClick={convertTemperature}>Convert</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {convertedTemperature !== null && <p>Converted temperature: {convertedTemperature}</p>}
    </div>
  );
};

export default TemperatureConverter;
