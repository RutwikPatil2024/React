import { Component } from "react";

class App extends Component{
  
  componentDidMount() {
    console.log("Component Mounted");
  }
  
  render() {
    return (
      <div>
        <h2>Hello World</h2>
      </div>
    );  
  }
}
export default App;