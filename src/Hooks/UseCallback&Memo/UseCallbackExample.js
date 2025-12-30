import { useState, useEffect, useCallback } from "react";

function UseCallbackExample() {
  const [count, setCount] = useState(0);

  const logCount = useCallback(() => {
    console.log("Current count:", count);
    
  }, [count]);

  useEffect(() => {
    logCount();
  }, [logCount]);

  return (
    <button onClick={() => setCount(count + 1)}>
      Increment ({count})
    </button>
  );
}

export default UseCallbackExample
