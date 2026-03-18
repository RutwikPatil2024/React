// import logo from "./logo.svg";
// import "./App.css";
// import React, { createRef } from "react";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.inputRef = createRef();
//   }

//   componentDidMount() {
//     this.inputRef.current.value = "10000";
//     console.log(this.inputRef.current.value);
//   }

//   render() {
//     return (
//       <div className="App">
//         <h2>Using Ref in React</h2>
//         <input type="text" ref={this.inputRef}></input>
//         <button onClick={() => console.log(this.inputRef.current.value)}>
//           Click Me
//         </button>
//       </div>
//     );
//   }
// }

// export default App;

import logo from "./logo.svg";
import "./App.css";
import React, { createRef } from "react";

class App extends React.Component {
  constructor() {
    super();
    this.inputRef = createRef();
  }

  componentDidMount() {
    this.inputRef.current.value = "10000";
    console.log(this.inputRef.current.value);
  }

  getValue() {
    this.inputRef.current.style.color = 'Red';  
  }

  render() {
    return (
      <div className="App">
        <h2>Using Ref in React</h2>
        <input type="text" ref={this.inputRef}></input>
        <button onClick={()=>{this.getValue()}}>
          Click Me
        </button>
      </div>
    );
  }
}

export default App;
