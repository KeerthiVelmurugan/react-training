import React, { useState } from 'react';

function InteractiveVisualization() {
  const [tooltipData, setTooltipData] = useState(null);

  const handleMouseEnter = (data) => {
    setTooltipData(data);
  };

  const handleMouseLeave = () => {
    setTooltipData(null);
  };

  return (
    <div style={{ width: '500px', height: '300px', backgroundColor: 'lightgray', position: 'relative' }}>
      {/* Visualization elements */}
      <div
        style={{ width: '100px', height: '100px', backgroundColor: 'blue', position: 'absolute', top: '50px', left: '50px' }}
        onMouseEnter={() => handleMouseEnter({ x: 50, y: 50, value: 'Data Point A' })}
        onMouseLeave={handleMouseLeave}
      />
      <div
        style={{ width: '100px', height: '100px', backgroundColor: 'green', position: 'absolute', top: '150px', left: '200px' }}
        onMouseEnter={() => handleMouseEnter({ x: 200, y: 150, value: 'Data Point B' })}
        onMouseLeave={handleMouseLeave}
      />
      {/* Tooltip */}
      {tooltipData && (
        <div
          style={{
            position: 'absolute',
            top: tooltipData.y + 10,
            left: tooltipData.x + 10,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: '5px',
            borderRadius: '5px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
            zIndex: 9999,
          }}
        >
          {tooltipData.value}
        </div>
      )}
    </div>
  );
}

export default InteractiveVisualization;
