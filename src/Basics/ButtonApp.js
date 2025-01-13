// App.jsx
import React from 'react';
import Button from './Button';

const ButtonApp = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <Button label="Click me" color="blue" onClick={handleClick} />
      <Button label="Submit" color="green" onClick={() => console.log('Submitted')} />
      <Button label="Delete" color="red" onClick={() => console.log('Deleted')} />
    </div>
  );
};

export default ButtonApp;
