import React, { useState, useCallback } from 'react';
import ChildComponent from './UseCallbackChild';


const UseCallbackParentComponent = () => {
  const [count, setCount] = useState(0);

  // useCallback hook to memoize the increment function
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <ChildComponent increment={increment} />
    </div>
  );
};

export default UseCallbackParentComponent;
