import React, { useState } from 'react';

const DateComparison = () => {
  const [firstDate, setFirstDate] = useState('');
  const [secondDate, setSecondDate] = useState('');
  const [comparisonResult, setComparisonResult] = useState('');

  const handleFirstDateChange = (e) => {
    setFirstDate(e.target.value);
  };

  const handleSecondDateChange = (e) => {
    setSecondDate(e.target.value);
  };

  const compareDates = () => {
    const date1 = new Date(firstDate);
    const date2 = new Date(secondDate);

    if (!isNaN(date1.getTime()) && !isNaN(date2.getTime())) {
      console.log(date1.getTime())
      if (date1 < date2) {
        setComparisonResult('Date 1 is before Date 2');
      } else if (date1 > date2) {
        setComparisonResult('Date 1 is after Date 2');
      } else {
        setComparisonResult('Date 1 is the same as Date 2');
      }
    } else {
      setComparisonResult('Please enter valid dates for both fields');
    }
  };

  return (
    <div>
      <h2>Date Comparison Example</h2>
      <div>
        <label htmlFor="firstDate">Enter first date:</label>
        <input type="date" id="firstDate" value={firstDate} onChange={handleFirstDateChange} />
      </div>
      <div>
        <label htmlFor="secondDate">Enter second date:</label>
        <input type="date" id="secondDate" value={secondDate} onChange={handleSecondDateChange} />
      </div>
      <button onClick={compareDates}>Compare Dates</button>
      <div>
        {comparisonResult && <p>{comparisonResult}</p>}
      </div>
    </div>
  );
};

export default DateComparison;
