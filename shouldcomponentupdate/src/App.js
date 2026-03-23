import { Component } from "react";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      noofattempt: 5,
    };
  }

  shouldComponentUpdate() {
    console.log(this.state.noofattempt);
    if (this.state.noofattempt <= 0) {
      alert("All Attempt Finished try after 24hrs");
      return false;
    }
    return true;
  }

  render() {
    return (
      <div class="body">
        <div class="login">
          <h1>Login</h1>
          <input type="text" placeholder="Enter Email"></input>
          <input type="password" placeholder="Enter Password"></input>
          <button onClick={()=>{this.setState({noofattempt:this.state.noofattempt-1})}}>Login</button>
          <h4>Attemp Remaining { this.state.noofattempt}</h4>
        </div>
      </div>
    );
  }
}
export default App;
