import React, { useEffect } from 'react';

const KeyboardShortcuts = () => {

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey) {
        switch (event.key) {
          case 's':
            event.preventDefault();
            handleSave();
            break;
          case 'p':
            event.preventDefault();
            handlePrint();
            break;
          default:
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleSave = () => {
    // Your save logic here
    alert('Save triggered');
  };

  const handlePrint = () => {
    // Your print logic here
    alert('Print triggered');
  };

  return (
    <div>
      <h1>Keyboard Shortcuts Example</h1>
      <p>Press Ctrl+S to save, Ctrl+P to print.</p>
    </div>
  );
};

export default KeyboardShortcuts;
