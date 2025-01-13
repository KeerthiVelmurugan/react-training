import React, { useState, useEffect } from 'react';

function ExamTimer() {
  const [time, setTime] = useState(0); // time in seconds
  const [inputHours, setInputHours] = useState('');
  const [inputMinutes, setInputMinutes] = useState('');
  const [inputSeconds, setInputSeconds] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning && time > 0) {
      intervalId = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(intervalId);
      setIsRunning(false); // stop the timer when it reaches zero
    }

    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const startTimer = () => {
    const totalSeconds =
      parseInt(inputHours || 0) * 3600 +
      parseInt(inputMinutes || 0) * 60 +
      parseInt(inputSeconds || 0);

    setTime(totalSeconds);
    setIsRunning(true);
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div>
      {!isRunning && (
        <div>
          <input
            type="number"
            placeholder="Hours"
            value={inputHours}
            onChange={(e) => setInputHours(e.target.value)}
          />
          <input
            type="number"
            placeholder="Minutes"
            value={inputMinutes}
            onChange={(e) => setInputMinutes(e.target.value)}
          />
          <input
            type="number"
            placeholder="Seconds"
            value={inputSeconds}
            onChange={(e) => setInputSeconds(e.target.value)}
          />
          <button onClick={startTimer}>Start Timer</button>
        </div>
      )}
      {isRunning && (
        <h2>Timer: {formatTime(time)}</h2>
      )}
    </div>
  );
}

export default ExamTimer;



// import React, { useState, useEffect } from 'react';

// function Timer() {
//   const [timeLeft, setTimeLeft] = useState(0); // Time in seconds
//   const [inputMinutes, setInputMinutes] = useState('');
//   const [isRunning, setIsRunning] = useState(false);

//   useEffect(() => {
//     if (isRunning && timeLeft > 0) {
//       const intervalId = setInterval(() => {
//         setTimeLeft(prevTime => prevTime - 1);
//       }, 1000);

//       return () => clearInterval(intervalId);
//     } else if (timeLeft === 0 && isRunning) {
//       setIsRunning(false); // Stop the timer when it reaches zero
//     }
//   }, [isRunning, timeLeft]);

//   const startTimer = () => {
//     setTimeLeft(parseInt(inputMinutes) * 60);
//     setIsRunning(true);
//   };

//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
//   };

//   return (
//     <div>
//       {!isRunning && (
//         <div>
//           <input
//             type="number"
//             placeholder="Minutes"
//             value={inputMinutes}
//             onChange={(e) => setInputMinutes(e.target.value)}
//           />
//           <button onClick={startTimer}>Start Timer</button>
//         </div>
//       )}
//       {isRunning && (
//         <h2>Time Left: {formatTime(timeLeft)}</h2>
//       )}
//     </div>
//   );
// }

// export default Timer;
