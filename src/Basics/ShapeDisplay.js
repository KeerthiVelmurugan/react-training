import React, { useState } from 'react';

const ShapeDisplay = () => {
  const [selectedShape, setSelectedShape] = useState('');

  const handleShapeChange = (event) => {
    setSelectedShape(event.target.value);
  };

  const renderShape = () => {
    switch (selectedShape) {
      case 'circle':
        return <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: 'blue' }}></div>;
      case 'square':
        return <div style={{ width: '100px', height: '100px', backgroundColor: 'green' }}></div>;
      case 'triangle':
        return (
          <div style={{ width: '0', height: '0', borderTop: '100px solid yellow', borderRight: '100px solid transparent' }}></div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h2>Shape Display</h2>
      <select value={selectedShape} onChange={handleShapeChange}>
        <option value="">Select a shape</option>
        <option value="circle">Circle</option>
        <option value="square">Square</option>
        <option value="triangle">Triangle</option>
      </select>
      <div style={{ marginTop: '20px' }}>
        {renderShape()}
      </div>
    </div>
  );
};

export default ShapeDisplay;
