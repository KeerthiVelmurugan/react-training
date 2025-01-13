import React from 'react';

function MouseOverOutExample() {
  const handleMouseOver = () => {
    console.log('Mouse over');
  };

  const handleMouseOut = () => {
    console.log('Mouse out');
  };

  return (
    <div 
      onMouseOver={handleMouseOver} 
      onMouseOut={handleMouseOut} 
      style={{ 
        width: '200px', 
        height: '200px', 
        backgroundColor: 'lightblue' 
      }}
    >
      <div>Hover over me</div>
    </div>
  );
}

export default MouseOverOutExample;
