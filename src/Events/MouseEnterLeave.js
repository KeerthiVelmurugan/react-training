import React from 'react';

function MouseEnterLeaveExample() {
  const handleMouseEnter = () => {
    console.log('Mouse enter');
  };

  const handleMouseLeave = () => {
    console.log('Mouse leave');
  };

  return (
    <div 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave} 
      style={{ 
        width: '200px', 
        height: '200px', 
        backgroundColor: 'lightblue' 
      }}
    >
      <button>Hover over me</button>
    </div>
  );
}

export default MouseEnterLeaveExample;
