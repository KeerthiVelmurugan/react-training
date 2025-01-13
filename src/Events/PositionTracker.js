import React, { useState } from 'react';

function MousePositionTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div style={{ width: '100%', height: '100vh', border: '1px solid black' }} onMouseMove={handleMouseMove}>
      <p>Mouse Position: ({position.x}, {position.y})</p>
    </div>
  );
}

export default MousePositionTracker;
