import React, { useState, useCallback } from 'react';

// function ChildComponent({ onClick }) {
//   console.log('ChildComponent rendered');
//   return <button onClick={onClick}>Click me</button>;
// }

function UseCallbackExample() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Button clicked');
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Click me</button>
      {/* <ChildComponent onClick={handleClick} /> */}
    </div>
  );
}

export default UseCallbackExample;
