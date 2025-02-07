import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs on every render, including initial render. This is an uncommon
    // mistake that may lead to unexpected behavior or performance issues if the callback
    // is not optimized to only execute under specific conditions
    console.log('Effect running:', count);
    return () => {
      console.log('Effect cleanup');
    };
  }, [count]); // This is okay if you intend to run every time count changes.

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default MyComponent;