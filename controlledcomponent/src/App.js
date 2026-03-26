import React from "react";
import { useState } from "react";

function App() {
  const [val, setval] = useState("");
  return (
    <div>
      <h1>Controlled Component</h1>
      <textarea
        onChange={(e) => {
          setval(e.target.value);
        }}
        placeholder="Enter Your Text"
        style={{ width: 1040, height: 124 }}
      ></textarea>
      <h1>{val}</h1>
    </div>
  );
}
export default App;
