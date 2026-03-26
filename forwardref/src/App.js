import React, { useRef } from 'react';
import User from './User.js';

function App() {
  let inputref = useRef(null);

  function updateInput() {
    inputref.current.value = "1000";
    inputref.current.style.color = 'red';
    inputref.current.focus();
  }

  return (
    <div>
      <h1>Forwardref in React</h1>
      <User ref={inputref} />
      <button onClick={updateInput}>Update Input</button>
    </div>
  );
}
export default App;