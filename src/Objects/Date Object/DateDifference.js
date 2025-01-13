import React, { useState } from 'react';

const DateDifference = () => {
  const [firstDate, setFirstDate] = useState('');
  const [secondDate, setSecondDate] = useState('');
  const [differenceResult, setDifferenceResult] = useState('');

  const handleFirstDateChange = (e) => {
    setFirstDate(e.target.value);
  };

  const handleSecondDateChange = (e) => {
    setSecondDate(e.target.value);
  };

  const calculateDifference = () => {
    const date1 = new Date(firstDate);
    const date2 = new Date(secondDate);

    if (!isNaN(date1.getTime()) && !isNaN(date2.getTime())) {
      console.log(date1,date2)
      const difference = Math.abs(date2 - date1); // Difference in milliseconds
      console.log(difference)
      const millisecondsPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
      console.log(millisecondsPerDay)
      const daysDifference = Math.floor(difference / millisecondsPerDay);
      console.log(difference/millisecondsPerDay)

      setDifferenceResult(`The difference between ${date1.toDateString()} and ${date2.toDateString()} is ${daysDifference} days.`);
    } else {
      setDifferenceResult('Please enter valid dates for both fields');
    }
  };

  return (
    <div>
      <h2>Date Difference Example</h2>
      <div>
        <label htmlFor="firstDate">Enter first date:</label>
        <input type="date" id="firstDate" value={firstDate} onChange={handleFirstDateChange} />
      </div>
      <div>
        <label htmlFor="secondDate">Enter second date:</label>
        <input type="date" id="secondDate" value={secondDate} onChange={handleSecondDateChange} />
      </div>
      <button onClick={calculateDifference}>Calculate Difference</button>
      <div>
        {differenceResult && <p>{differenceResult}</p>}
      </div>
    </div>
  );
};

export default DateDifference;
