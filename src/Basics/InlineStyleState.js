import React, { useState } from 'react';

function YourComponent() {
  const [message, setMessage] = useState(null); 
  let calc =9.7

  const updateMessage = () => {
    const bmiMessage = (
        <p>
          <span style={{ color: "red" }}>underweight</span> your bmi is {calc}
        </p>
      );
    setMessage(bmiMessage);
  };

  
  return (
    <div>
      <button onClick={updateMessage}>Update Message</button>
      {message}
    </div>
  );
}

export default YourComponent;
