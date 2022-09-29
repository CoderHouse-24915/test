import React, { useState } from "react";

const Counter = ({ initialCount, foo }) => {
  const [counter, setCounter] = useState(initialCount);

  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCounter((prev) => prev - 1);
  };

  const handleRestart = () => {
    setCounter(0);
  };

  return (
    <div>
      <h1>
        Counter: <span data-testid="count">{counter}</span>
      </h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleRestart}>Restart</button>
      <button onClick={foo}>Alert</button>
    </div>
  );
};

export default Counter;
