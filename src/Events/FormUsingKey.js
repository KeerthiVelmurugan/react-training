import React, { useState } from 'react';

const SubmissionUsingKey = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Shift') {
      event.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    // Your form submission logic here
    
    alert(`Form submitted with input: ${inputValue}`);
    // Optionally reset the form
    setInputValue('');
  };  

  return (
    <form>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Type something and press Enter"
      />
      <button type="button">
        Submit
      </button>
    </form>
  );
};

export default SubmissionUsingKey;
