import React from 'react';

function MouseDownUpExample() {
  const handleMouseDown = () => {
    console.log('Mouse down');
  };

  const handleMouseUp = () => {
    console.log('Mouse up');
  };

  return (
    <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} style={{ width: '200px', height: '200px', backgroundColor: 'lightblue' }}>
      Click and hold me
    </div>
  );
}

export default MouseDownUpExample;
