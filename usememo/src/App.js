// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';
// function App() {
//   const [count, setCount] = useState(0);
//   const [item, setItem] = useState(10);

//   function multicount() {
//     console.log("This is Multicount");
//     return (count * 10);
//   }

//   return (
//     <div className="App">
//       <h2>Using Memo</h2>
//       <h2>Count : {count }</h2>
//       <h2>Item : {item}</h2>
//       <h2>multicount : { multicount()}</h2>
//       <button onClick={()=>{setCount(count+1)}}>Update Count</button>
//       <button onClick={()=>{setItem(item+5)}}>Update Item</button>
//     </div>
//   );
// }

// export default App;


//using usememo()
import logo from './logo.svg';
import './App.css';
import { useState,useMemo } from 'react';
function App() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  const multicount = useMemo(function multicount() {
    console.log("This is Multicount");
    return (count * 10);
  }, [count]);
  

  return (
    <div className="App">
      <h2>Using Memo</h2>
      <h2>Count : {count }</h2>
      <h2>Item : {item}</h2>
      <h2>multicount : { multicount}</h2>
      <button onClick={()=>{setCount(count+1)}}>Update Count</button>
      <button onClick={()=>{setItem(item+5)}}>Update Item</button>
    </div>
  );
}

export default App;
