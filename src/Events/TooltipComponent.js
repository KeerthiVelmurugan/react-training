import React, { useState } from 'react';

function TooltipComponent() {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseOver = () => {
    setShowTooltip(true);
  //  console.log("true",showTooltip)
  };

  const handleMouseOut = () => {
    setShowTooltip(false);
  //  console.log("false",showTooltip)
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button 
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{ padding: '10px', background: 'lightblue', border: 'none', cursor: 'pointer' }}
      >
        Hover me!
      </button>
      {showTooltip && (
        <div style={{
          //  position: 'absolute',
         //   bottom: '100%', // Position above the button
          // left: '50%',
          // right:"50%",
          //  transform: 'translateX(-50%)',
          //  marginBottom: '10px',
          //  padding: '5px',
            background: 'black',
            color: 'white',
            borderRadius: '3px',
           // whiteSpace: 'nowrap',
          }}>
          Tooltip text
        </div>
      )}
    </div>
  );
}

export default TooltipComponent;
