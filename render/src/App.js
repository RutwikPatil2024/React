// //render gets called when Element/Component is Created
// import { Component } from "react";

// class App extends Component{
//   constructor() {
//     super();
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello World</h1>
//       </div>
//     );
//   }
// }

// export default App;

//render gets called when State Changes of Element
// import { Component } from "react";

// class App extends Component{
//   constructor() {
//     super();
//     this.state = {
//       count: 1,
//     };
//   }

//   render() {
//     console.log("Render Gets Called");
//     return (
//       <div>
//         <h1>Hello World</h1>
//         <h2>Count : {this.state.count }</h2>
//         <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update Count</button>
//       </div>
//     );
//   }
// }

// export default App;

//render gets called when props get updated/changed
import { Component } from "react";
import User from './User.js';

class App extends Component{
  constructor() {
    super();
    this.state = {
      count: 10
    };
  }

  render() {
    console.log("Render Gets Called");
    return (
      <div>
        <h1>Updating Props using this Button</h1>
        <User data={ this.state.count} />
        <button onClick={()=>{this.setState({count:this.state.count+10})}}>Update Props</button>
      </div>
    );
  }
}

export default App;