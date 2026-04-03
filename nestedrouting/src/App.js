import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Buy from "./components/Buy";
import Connect from "./components/Connect";
import Login from "./components/login.js";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/about" element={<About />}>
          <Route path="services" element={<Services />} />
          <Route path="buy" element={<Buy />} />
          <Route path="connect" element={<Connect />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
