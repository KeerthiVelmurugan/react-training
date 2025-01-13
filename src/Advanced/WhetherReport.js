import React, { useState, useEffect } from 'react';

const WeatherReport = ({ latitude, longitude }) => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = '6035d9c82fcfab58ff9620f89744d7d3';

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [latitude, longitude, apiKey]);

  return (
    <div>
      <h2>Weather Report</h2>
      {weatherData ? (
        <div>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherReport;
