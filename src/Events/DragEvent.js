import React from 'react';

function DraggableComponent() {
  const handleDragStart = (event) => {
    console.log('Drag started!');
    // Add additional logic if needed
  };

  return (
    <button 
    draggable   // Make the element draggable
      onDragStart={handleDragStart}  // Call handleDragStart when drag starts
      style={{ width: '100px', height: '100px', background: 'lightblue' }}
    >
      Drag me!
    </button>
  );
}

export default DraggableComponent;
