import React, { useState, useMemo } from 'react';

function UseMemoHook() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // Memoize the doubled count value
  const doubledCount = useMemo(() => {
    console.log('Calculating doubled count...');
    return count * 2;
  }, [count]);

  return (
    <div>
      <h1>useMemo Example</h1>
      
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      
      
      <p>Name: {name}</p>
      
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Count: {count}</p>
      <p>Doubled Count: {doubledCount}</p>
    </div>
  );
}

export default UseMemoHook;
