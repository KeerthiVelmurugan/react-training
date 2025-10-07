import React, { useRef, useState } from 'react';

const UseRefFormFocus = () => {
  const inputRefs = useRef([
    React.createRef(), // Ref for the first input
    React.createRef(), // Ref for the second input
    React.createRef(), // Ref for the third input
    // Add more refs as needed for additional inputs
  ]);

  const [formData, setFormData] = useState({
    input1: '',
    input2: '',
    input3: '',
    // Add more properties as needed for additional inputs
  });

  const handleChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      // Focus on the next input field
      if (inputRefs.current[index + 1]) {
        inputRefs.current[index + 1].current.focus();
      }
    }
  };

  return (
    <form>
      <label>
        Input 1:
        <input
          ref={inputRefs.current[0]}
          type="text"
          value={formData.input1}
          onChange={(e) => handleChange('input1', e.target.value)}
          onKeyDown={(e) => handleKeyDown(0, e)}
        />
      </label>
      <br />
      <label>
        Input 2:
        <input
          ref={inputRefs.current[1]}
          type="text"
          value={formData.input2}
          onChange={(e) => handleChange('input2', e.target.value)}
          onKeyDown={(e) => handleKeyDown(1, e)}
        />
      </label>
      <br />
      <label>
        Input 3:
        <input
          ref={inputRefs.current[2]}
          type="text"
          value={formData.input3}
          onChange={(e) => handleChange('input3', e.target.value)}
          onKeyDown={(e) => handleKeyDown(2, e)}
        />
      </label>
      {/* Add more input fields as needed */}
    </form>
  );
};

export default UseRefFormFocus;
