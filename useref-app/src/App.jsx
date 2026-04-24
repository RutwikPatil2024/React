// import { useEffect, useRef, useState } from 'react'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0);
//   let val = useRef(0);

//   function handlesubmit() {
//     setCount(count + 1);
//     val.current = val.current + 1;
//     console.log("Value of val : ", val);
//   }

//   useEffect(() => {
//     console.log("Re-rendered happen");
//   });

//   return (
//     <div>
//       <button onClick={handlesubmit}>
//         Increment
//       </button>
//       <br />
//       <br />
//       <div>
//         count:{count}
//       </div>
//     </div>
//   )
// }

// export default App;

import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let btnref = useRef();

  function handlesubmit() {
    setCount(count + 1);
  }

  function changecolor() {
    btnref.current.style.backgroundColor = "red";
  }

  return (
    <div>
      <button
        ref={btnref}
        onClick={handlesubmit}>
        Increment
      </button>
      <br />
      <br />
      <div>count:{count}</div>
      <br /><br />
      <button onClick={changecolor}>
        Change the Color of First Button
      </button>
    </div>
  );
}

export default App;
