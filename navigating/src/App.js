import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/about")}>About</button>
      <button onClick={() => navigate("/home")}>Home</button>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;