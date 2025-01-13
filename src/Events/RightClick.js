import React, { useState } from 'react';

function ContextMenuComponent() {
  const [showMenu, setShowMenu] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const handleContextMenu = (event) => {
    event.preventDefault();
    setPosition({ top: event.clientY, left: event.clientX });
    setShowMenu(true);
  };

  const handleClick = () => {
    setShowMenu(false);
  };

  return (
    <div 
      style={{ width: '100vw', height: '100vh', border: '1px solid black' }} 
      onContextMenu={handleContextMenu}
      onClick={handleClick}
    >
      <p>Right-click to see the custom menu.</p>
      {showMenu && (
        <div 
          style={{
            position: 'absolute',
            top: position.top,
            left: position.left,
            backgroundColor: 'white',
            border: '1px solid black',
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
            zIndex: 1000
          }}
        >
          <ul style={{ listStyle: 'none', padding: '10px', margin: 0 }}>
            <li><button onClick={() => alert('Option 1 clicked')}>Option 1</button></li>
            <li><button onClick={() => alert('Option 2 clicked')}>Option 2</button></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ContextMenuComponent;
