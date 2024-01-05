import "./App.css";
import { useState } from "react";

function App() {
  let initialValue = 0;
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount((prevState) => prevState + 1);
  };
  const decrement = () => {
    setCount((prevState) => prevState - 1);
  };
  const reset = () => {
    setCount(initialValue);
  };

  return (
    <div className="container">
      <h1>Counter</h1>
      <h2>Counter Value: {count}</h2>
      <div className="button-container">
      <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
}

export default App;
