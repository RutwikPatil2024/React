import { Component } from "react";

class App extends Component{
  constructor() {
    super();
    this.state = {
      name: "Anil",
    };
  }

  render() {
    return (
      <div>
        <h1>Hello World {this.state.name}</h1>
      </div>
    );
  }
}

export default App;