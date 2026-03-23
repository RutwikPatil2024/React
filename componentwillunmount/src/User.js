import { Component } from "react";

class User extends Component {
  componentWillUnmount() {
    console.log("component will unmount executed");
  }
  render() {
    return <h1>Rutwik</h1>;
  }
}

export default User;
