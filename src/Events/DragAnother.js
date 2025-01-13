import React, { useState } from 'react';

function DraggableButton() {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setInitialPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const deltaX = event.clientX - initialPosition.x;
      const deltaY = event.clientY - initialPosition.y;
      setPosition({ x: position.x + deltaX, y: position.y + deltaY });
      setInitialPosition({ x: event.clientX, y: event.clientY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <button 
      onMouseDown={handleMouseDown} 
      onMouseMove={handleMouseMove} 
      onMouseUp={handleMouseUp}
      style={{ position: 'absolute', left: position.x, top: position.y }}
    >
      Drag me!
    </button>
  );
}

export default DraggableButton;
