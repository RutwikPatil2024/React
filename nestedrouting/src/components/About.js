import { Link, Outlet } from "react-router-dom";

function About() {
  return (
    <div>
      <h1 style={{ color: "green", fontSize: 15 }}>About Page</h1>
      <ul>
        <li>
          <Link to="services">Services</Link>
        </li>
        <li>
          <Link to="buy">Buy</Link>
        </li>
        <li>
          <Link to="connect">Connect Us</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default About;