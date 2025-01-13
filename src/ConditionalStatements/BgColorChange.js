import React, { useState } from 'react';

function BgcolorChange() {
  const [colorName, setColorName] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');

  const handleColorChange = (event) => {
    const { value } = event.target;
    setColorName(value);
    setBackgroundColor(getColor(value.toLowerCase()));
  };

  const getColor = (name) => {
    switch (name) {
      case 'red':
        return 'red';
      case 'green':
        return 'green';
      case 'blue':
        return 'blue';
      // Add more cases for additional color names
      default:
        return name; // Default background color
    }
  };

  return (
    <div>
      <h2>Color Selector</h2>
      <input
        type="text"
        value={colorName}
        onChange={handleColorChange}
        placeholder="Enter color name"
      />
      <div
        style={{
          backgroundColor: backgroundColor,
          width: '100px',
          height: '100px',
          margin: '10px',
        }}
      ></div>
    </div>
  );
}

export default BgcolorChange;
