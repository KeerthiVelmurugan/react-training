import React, { useRef, useState } from 'react';

const UseRefExample = () => {
  const inputValueRef = useRef(null);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = () => {
    // Access and update the mutable value directly without triggering a re-render
    setInputValue(inputValueRef.current.value);
    console.log(inputValue)
  };

  return (
    <div>
      {/* Assigning the ref to an input element */}
      <input
        ref={inputValueRef}
        type="text"
        placeholder="Type here"
        value={inputValue}
        onChange={handleInputChange}
      />
      <p>Current Value: {inputValue}</p>
    </div>
  );
};

export default UseRefExample;
