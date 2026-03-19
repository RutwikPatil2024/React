// import logo from "./logo.svg";
// import "./App.css";
// import React,{Component} from 'react'

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }
//   render() {
//     return (
//       <div className="App">
//         <h2>Using Pure Component</h2>
//         <h2>Count : {this.state.count}</h2>
//         <button onClick={() => { this.setState({count:this.state.count + 1}) }}>Update Count</button>
//       </div>
//     );
//   }
// }

// export default App;

import logo from "./logo.svg";
import "./App.css";
import React,{PureComponent} from 'react'

class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div className="App">
        <h2>Using Pure Component</h2>
        <h2>Count : {this.state.count}</h2>
        <button onClick={() => { this.setState({count:1}) }}>Update Count</button>
      </div>
    );
  }
}

export default App;
