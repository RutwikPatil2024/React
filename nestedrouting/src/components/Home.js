import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <h1 style={{ color: "purple", fontSize: 15}}>Home Page</h1>
      <ul>
        <li><Link to="/Register">Register</Link></li>
        <li><Link to="/Login">Login</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  );
}

export default Home;