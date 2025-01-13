import React, { useState } from 'react';

const DateCalculator = () => {
  const [initialDate, setInitialDate] = useState('');
  const [daysToAdd, setDaysToAdd] = useState(5);
  const [beforeDate, setBeforeDate] = useState('');
  const [afterDate, setAfterDate] = useState('');

  const handleDateChange = (event) => {
    setInitialDate(event.target.value);
  };

  const handleDaysChange = (event) => {
    setDaysToAdd(parseInt(event.target.value, 10));
  };

  const calculateDates = () => {
    const date = new Date(initialDate);
    const millisecondsToAdd = daysToAdd * 24 * 60 * 60 * 1000;

    const newBeforeDate = new Date(date.getTime() - millisecondsToAdd);
    const newAfterDate = new Date(date.getTime() + millisecondsToAdd);

    setBeforeDate(newBeforeDate.toISOString().split('T')[0]);
    setAfterDate(newAfterDate.toISOString().split('T')[0]);
  };

  return (
    <div>
      <h1>Date Calculator</h1>
      <input
        type="date"
        value={initialDate}
        onChange={handleDateChange}
      />
      <input
        type="number"
        value={daysToAdd}
        onChange={handleDaysChange}
      />
      <button onClick={calculateDates}>Calculate Dates</button>
      {beforeDate && (
        <p>Date {daysToAdd} Days Before: {beforeDate}</p>
      )}
      {afterDate && (
        <p>Date {daysToAdd} Days After: {afterDate}</p>
      )}
    </div>
  );
};

export default DateCalculator;
