import React, { useState } from 'react';

const WeatherApp = () => {
  const [location, setLocation] = useState('');
  const [temperature, setTemperature] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiKey = '6035d9c82fcfab58ff9620f89744d7d3';

  const fetchWeather = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
      const data = await response.json();
      setTemperature(data.main.temp);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
    setLoading(false);
  };

  const handleInputChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeather();
  };

  return (
    <div>
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Location:
          <input type="text" value={location} onChange={handleInputChange} />
        </label>
        <button type="submit" disabled={!location || loading}>
          {loading ? 'Loading...' : 'Get Weather'}
        </button>
      </form>
      {temperature && (
        <p>The temperature in {location} is {temperature}°C</p>
      )}
    </div>
  );
};

export default WeatherApp;
