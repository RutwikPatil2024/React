import React from "react";
import { useRef } from "react";
function App() {
  const inputref1 = useRef(null);
  const inputref2 = useRef(null);

  function onformsubmit(e) {
    e.preventDefault();
    let h1 = document.getElementById("one");
    h1.textContent = inputref1.current.value;
    console.log(inputref1.current.value);
    console.log(inputref2.current.value);
  }

  return (
    <div>
      <h1>Uncontrolled Component</h1>
      <form onSubmit={onformsubmit}>
        <input placeholder="Enter Name" ref={inputref1} type="text"></input>
        <br></br>
        <input placeholder="Enter Email" ref={inputref2} type="text"></input>
        <br></br>
        <button type="submit">submit</button>
      </form>
      <h3 id="one"></h3>
    </div>
  );
}

export default App;
