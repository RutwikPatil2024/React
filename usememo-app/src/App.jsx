import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [count, setcount] = useState(0);
  const [input, setinput] = useState(0);

  function expensivetask(num) {
    console.log("Inside Expensive task");
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  }

  let doublevalue = useMemo(() => expensivetask(input), [input]);

  return (
    <div>
      <button onClick={() => setcount(count + 1)}>Increment</button>

      <div>Count : {count}</div>

      <input
        type="number"
        placeholder="Enter Number"
        value={input}
        onChange={(e) => setinput(Number(e.target.value))}
      />

      <div>Double : {doublevalue}</div>
    </div>
  );
}

export default App;