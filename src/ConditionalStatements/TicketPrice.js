import React, { useState } from 'react';

const TicketPriceCalculator = () => {
  const [age, setAge] = useState('');
  const [ticketPrice, setTicketPrice] = useState('');

  const calculateTicketPrice = () => {
    if (!age.trim()) {
      setTicketPrice('Please enter your age.');
      return;
    }

    const ageNum = parseInt(age);
    if (isNaN(ageNum) || ageNum < 0 || ageNum >130) {
      setTicketPrice('Please enter a valid age.');
      return;
    }

    if (ageNum < 5) {
      setTicketPrice('Free');
    } else if (ageNum >= 5 && ageNum <= 12) {
      setTicketPrice('$5');
    } else if (ageNum >= 13 && ageNum <= 64) {
      setTicketPrice('$10');
    } else {
      setTicketPrice('$7');
    }
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  return (
    <div>
      <h2>Ticket Price Calculator</h2>
      <div>
        <label>Enter your age:</label>
        <input type="number" value={age} onChange={handleAgeChange} />
      </div>
      <button onClick={calculateTicketPrice}>Calculate</button>
      {ticketPrice && <p>Ticket Price: {ticketPrice}</p>}
    </div>
  );
};

export default TicketPriceCalculator;
