// import React, { useState, useEffect } from 'react';

// const GameController = () => {
//   const [position, setPosition] = useState({ top: 50, left: 50 });

//   const moveCharacter = (direction) => {
//     setPosition((prevPosition) => {
//       const { top, left } = prevPosition;
//       switch (direction) {
//         case 'up':
//           return { ...prevPosition, top: top > 0 ? top - 10 : top };
//         case 'down':
//           return { ...prevPosition, top: top < window.innerHeight - 50 ? top + 10 : top };
//         case 'left':
//           return { ...prevPosition, left: left > 0 ? left - 10 : left };
//         case 'right':
//           return { ...prevPosition, left: left < window.innerWidth - 50 ? left + 10 : left };
//         default:
//           return prevPosition;
//       }
//     });
//   };

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       switch (event.key) {
//         case 'ArrowUp':
//         case 'w':
//           moveCharacter('up');
//           break;
//         case 'ArrowDown':
//         case 's':
//           moveCharacter('down');
//           break;
//         case 'ArrowLeft':
//         case 'a':
//           moveCharacter('left');
//           break;
//         case 'ArrowRight':
//         case 'd':
//           moveCharacter('right');
//           break;
//         default:
//           break;
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, []);

//   return (
//     <div>
//       <h1>Move the Character</h1>
//       <div
//         style={{
//           position: 'absolute',
//           top: `${position.top}px`,
//           left: `${position.left}px`,
//           width: '50px',
//           height: '50px',
//           backgroundColor: 'red',
//         }}
//       ></div>
//     </div>
//   );
// };

// export default GameController;


import React, { useState } from 'react';

const GameController = () => {
  const [position, setPosition] = useState({ top: 50 });

  const moveCharacter = (direction) => {
    setPosition((prevPosition) => {
      const { top } = prevPosition;
      switch (direction) {
        case 'up':
          return { top: top > 0 ? top - 10 : top };
        case 'down':
          return { top: top < window.innerHeight - 50 ? top + 10 : top };
        default:
          return prevPosition;
      }
    });
  };

  const handleKeyDown = (event) => {
    switch (event.key) {
      case 'ArrowUp':
        moveCharacter('up');
        break;
      case 'ArrowDown':
        moveCharacter('down');
        break;
      default:
        break;
    }
  };

  return (
    <div
      tabIndex={0} // Make the div focusable
      onKeyDown={handleKeyDown} // Handle keydown event
      style={{ width: '100vw', height: '100vh', outline: 'none' }} // Remove default focus outline
     // role="application" // Optional: enhance accessibility
    >
      <h1>Move the Character</h1>
      <div
        style={{
          position: 'absolute',
          top: `${position.top}px`,
          width: '50px',
          height: '50px',
          backgroundColor: 'red',
        }}
      ></div>
    </div>
  );
};

export default GameController;
