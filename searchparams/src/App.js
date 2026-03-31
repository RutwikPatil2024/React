// import {useSearchParams} from 'react-router-dom'

// function App() {
//   const [searchparams] = useSearchParams();

//   const name = searchparams.get("name");
//   const age = searchparams.get("age");

//   return (
//     <div>
//       <h1>Name : { name}</h1>
//       <h1>Age : { age}</h1>
//     </div>
//   );
// }
// export default App;
// // http://localhost:3000/?name=Rutwik&age=21


import { useSearchParams } from 'react-router-dom'
import { useState } from 'react';
function App() {
  const [searchparams, setsearchparams] = useSearchParams();
  // const { name } = searchparams.get("name");
  // const { age } = searchparams.get("age");
  let [name,setname] = useState(null);
  let [age,setage] = useState(null);
  function handleclick() {
    setsearchparams(
      {
        name: "Rutwik",
        age:50
      }
    );
    setname(searchparams.get("name"));
    setage(searchparams.get("age"));
  }

  return (
    <div>
      <button onClick={handleclick}>Set Parameter</button>
      <h2>Name : { name}</h2>
      <h2>Age : { age}</h2>
    </div>
  );
}
export default App;
// http://localhost:3000/?name=Rutwik&age=50