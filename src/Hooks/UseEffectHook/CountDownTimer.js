import React, { useState, useEffect } from 'react';

function CountDownTimer() {
  // States for time and user input
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [inputHours, setInputHours] = useState('');
  const [inputMinutes, setInputMinutes] = useState('');
  const [inputSeconds, setInputSeconds] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  // Handle input changes for hours, minutes, and seconds
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'hours') setInputHours(value);
    if (name === 'minutes') setInputMinutes(value);
    if (name === 'seconds') setInputSeconds(value);
  };

  // Start the countdown based on user input
  const startCountdown = () => {
    const hours = parseInt(inputHours) || 0;
    const minutes = parseInt(inputMinutes) || 0;
    const seconds = parseInt(inputSeconds) || 0;
    setTime({ hours, minutes, seconds });
    setIsRunning(true);
  };

  useEffect(() => {
    if (!isRunning) return; // Don't run the timer if not started

    // Set up the countdown timer
    const timerId = setInterval(() => {
      setTime((prevTime) => {
        let { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds -= 1;
        } else {
          if (minutes > 0) {
            minutes -= 1;
            seconds = 59;
          } else {
            if (hours > 0) {
              hours -= 1;
              minutes = 59;
              seconds = 59;
            } else {
              clearInterval(timerId); // Stop the timer when time is up
            }
          }
        }

        return { hours, minutes, seconds };
      });
    }, 1000); // Update every second

    // Cleanup timer when the component unmounts or is stopped
    return () => clearInterval(timerId);
  }, [isRunning]); // Only restart the timer when 'isRunning' changes

  return (
    <div>
      <h2>Countdown Timer</h2>
      <div>
        <label>
          Hours:
          <input
            type="number"
            name="hours"
            value={inputHours}
            onChange={handleInputChange}
            min="0"
          />
        </label>
        <label>
          Minutes:
          <input
            type="number"
            name="minutes"
            value={inputMinutes}
            onChange={handleInputChange}
            min="0"
            max="59"
          />
        </label>
        <label>
          Seconds:
          <input
            type="number"
            name="seconds"
            value={inputSeconds}
            onChange={handleInputChange}
            min="0"
            max="59"
          />
        </label>
        <button onClick={startCountdown}>Start Countdown</button>
      </div>

      <p>
        {time.hours.toString().padStart(2, '0')}:
        {time.minutes.toString().padStart(2, '0')}:
        {time.seconds.toString().padStart(2, '0')}
      </p>
    </div>
  );
}

export default CountDownTimer;
