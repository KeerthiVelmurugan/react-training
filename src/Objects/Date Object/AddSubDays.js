import React, { useState } from 'react';

const AddSubDays = () => {
  const [inputDate, setInputDate] = useState('');
  const [daysToAdd, setDaysToAdd] = useState(0);
  const [addedDate, setAddedDate] = useState(null);
  const [subtractedDate, setSubtractedDate] = useState(null);

  const handleInputChange = (e) => {
    setInputDate(e.target.value);
  };

  const handleDaysChange = (e) => {
    setDaysToAdd(parseInt(e.target.value, 10));
  };

  const adjustDate = () => {
    const originalDate = new Date(inputDate);
    if (!isNaN(originalDate.getTime())) {
      const added = new Date(originalDate);
      let a = originalDate.getDate() + daysToAdd
      added.setDate(a);
      setAddedDate(added.toDateString());

      const subtracted = new Date(originalDate);
      subtracted.setDate(originalDate.getDate() - daysToAdd);
      setSubtractedDate(subtracted.toDateString());
    } else {
      alert('Please enter a valid date!');
    }
  };

  return (
    <div>
      <h2>Adjust Date Example</h2>
      <div>
        <label htmlFor="inputDate">Enter a date:</label>
        <input type="date" id="inputDate" value={inputDate} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="daysToAdd">Days to add/subtract:</label>
        <input type="number" id="daysToAdd" value={daysToAdd} onChange={handleDaysChange} />
      </div>
      <button onClick={adjustDate}>Adjust Date</button>
      <div>
        {addedDate && <p>Date after {daysToAdd} days: {addedDate}</p>}
        {subtractedDate && <p>Date before {daysToAdd} days: {subtractedDate}</p>}
      </div>
    </div>
  );
};

export default AddSubDays;
