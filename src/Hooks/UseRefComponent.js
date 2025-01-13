import React, { useRef } from 'react';

function UseRefComponent() {
  // Create a ref
  const myRef = useRef();

  const handleClick = () => {
    // Access DOM element properties using current
    console.log(myRef.current.value);

    myRef.current.focus();
  };



  return (
    <div>
      
      <input ref={myRef} type="text" />
      
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}

export default UseRefComponent;
