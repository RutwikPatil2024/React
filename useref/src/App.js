import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';

function App() {
  let inputref = useRef(null);

  function handleInput() {
    inputref.current.value = "12345";
    inputref.current.focus();
    console.log("value set successfully");
  }
  return (
    <div className="App">
      <h2>Using useRef in React</h2>
      <input type='text' ref={inputref}></input>
      <button onClick={handleInput}>setValue</button>
    </div>
  );
}

export default App;
