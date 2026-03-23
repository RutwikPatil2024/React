//componentdidupdate when state gets updated
import { Component } from "react";
class App extends Component{

  constructor() {
    super();
    this.state = {
      count: 100,
    };
  }
  shouldComponentUpdate() {
    console.log("This has Returned False");
    return false;
    // return true;
  }

  componentDidUpdate() {
    console.log("Compoenent Updated state updated");
  }

  render() {
    return (
      <div>
        <h1>Component Did Update</h1>
        <h2>Count : {this.state.count }</h2>
        <button onClick={()=>{this.setState({count:this.state.count+10})}}>Update Count</button>
      </div>
    );
  }
}
export default App;