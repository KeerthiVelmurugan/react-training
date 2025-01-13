import React, { useState } from 'react';

function ColorSelector() {
  const [selectedColor, setSelectedColor] = useState('#ffffff');

  const handleColorChange = (event) => {
    const color = event.target.value;
    setSelectedColor(color);
    switch (color) {
      case '#ff0000':
        document.body.style.backgroundColor = '#ff0000'; // Red
        break;
      case '#00ff00':
        document.body.style.backgroundColor = '#00ff00'; // Green
        break;
      case '#0000ff':
        document.body.style.backgroundColor = '#0000ff'; // Blue
        break;
      default:
        document.body.style.backgroundColor = color; // Custom color
        break;
    }
  };

  return (
    <div>
      <h2>Color Selector</h2>
      <input
        type="color"
        value={selectedColor}
        onChange={handleColorChange}
      />
    </div>
  );
}

export default ColorSelector;
