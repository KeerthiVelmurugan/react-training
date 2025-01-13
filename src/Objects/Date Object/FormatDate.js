import React, { useState } from 'react';

const FormatDate = () => {
  const [inputDate, setInputDate] = useState('');
  const [formattedDate, setFormattedDate] = useState('');

  const handleInputChange = (e) => {
    setInputDate(e.target.value);
  };

  const formatInputDate = () => {
    const date = new Date(inputDate);
    
    if (!isNaN(date.getTime())) {
      const year = date.getFullYear();
      const month = ('0' + (date.getMonth() + 1)).slice(-2); // Adding 1 because getMonth() returns month index from 0
      console.log(month)
      const day = ('0' + date.getDate()).slice(-2);
      console.log(day)
      
      const formatted = `${year}-${month}-${day}`;
      setFormattedDate(formatted);
    } else {
      alert('Please enter a valid date!');
    }
  };
  

  return (
    <div>
      <h2>Date Formatting Example</h2>
      <div>
        <label htmlFor="inputDate">Enter a date:</label>
        <input type="date" id="inputDate" value={inputDate} onChange={handleInputChange} />
      </div>
      <button onClick={formatInputDate}>Format Date</button>
      {formattedDate && <p>Formatted date: {formattedDate}</p>}
    </div>
  );
};

export default FormatDate;
