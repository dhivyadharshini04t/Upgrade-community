import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling

function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter-container">
      <h1 className="counter">{count}</h1>
      <div className="button-container">
        <button className="btn" onClick={increaseCount}>Increase</button>
        <button className="btn" onClick={decreaseCount}>Decrease</button>
      </div>
    </div>
  );
}

export default Counter;
