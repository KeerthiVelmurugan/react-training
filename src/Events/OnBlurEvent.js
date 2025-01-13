import React from 'react';

function OnBlurEvent() {
  const handleBlur = () => {
    console.log('Input field blurred!');
  };

  return (
    <div>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        onBlur={handleBlur}
        placeholder="Enter your email"
      />
    </div>
  );
}

export default OnBlurEvent;
