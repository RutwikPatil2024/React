import logo from "./logo.svg";
import "./App.css";
import User from "./User.js";

function App() {
  const users = [
    { name: "Rutwik", address: "Sangli" },
    { name: "Ram", address: "Kolhapur" },
    { name: "Shyam", address: "pune" },
    { name: "Raju", address: "Satara" },
    { name: "Chimu", address: "Islampur" },
  ];
  return (
    <div className="App">
      <h1>Reuse Component</h1>
      {
          users.map((item, index) => {
            return (
              <>
                <User data={item} />
                <User data={item} />
              </>
            );
          })
      }
    </div>
  );
}

export default App;
