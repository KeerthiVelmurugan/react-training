import React, { useState } from 'react';

function BackgroundChange() {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const handleMouseOver = () => {
    setBackgroundColor('lightblue');
  };

  const handleMouseOut = () => {
    setBackgroundColor('red');
  };

  return (
    <div style={{ backgroundColor, padding: '20px', transition: 'background-color 0.5s', color:backgroundColor  }}
         onMouseOver={handleMouseOver}
         onMouseOut={handleMouseOut}>
      <h2>Hover over me to change background color!</h2>
    </div>
  );
}

export default BackgroundChange;
