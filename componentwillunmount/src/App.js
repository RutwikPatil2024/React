import { Component } from "react";
import User from "./User.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      bool: true,
    };
  }
  
  render() {
    return (
      <div>
        <h1>Hello</h1>
        {this.state.bool ? <User /> : <h2>World</h2>}
        <button
          onClick={() => {
            this.setState({ bool: !this.state.bool });
          }}
        >
          Update
        </button>
      </div>
    );
  }
}

export default App;
