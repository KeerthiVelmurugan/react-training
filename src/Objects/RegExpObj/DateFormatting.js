import React, { useState } from 'react';

function DateFormatting() {
  const [inputDate, setInputDate] = useState('');
  const [formattedDate, setFormattedDate] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputDate(value);
  };

  const formatDateString = (dateString) => {
    // Regular expression to validate date in YYYY-MM-DD format
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

    if (dateRegex.test(dateString)) {
      // Split date into year, month, and day
      const [year, month, day] = dateString.split('-');

      // Format date
      const formattedDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
      setFormattedDate(formattedDate);
      setErrorMessage('');
    } else {
      setFormattedDate('');
      setErrorMessage('Please enter date in YYYY-MM-DD format');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    formatDateString(inputDate);
  };

  return (
    <div>
      <h2>Date Formatting</h2>
      <form onSubmit={handleSubmit}>
        <label>Enter Date (YYYY-MM-DD):</label>
        <input type="text" value={inputDate} onChange={handleInputChange} />
        <button type="submit">Format</button>
      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {formattedDate && <p>Formatted Date: {formattedDate}</p>}
    </div>
  );
}

export default DateFormatting;
