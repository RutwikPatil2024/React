import logo from './logo.svg';
import './App.css';
import User from './User.js'

function App() {
  function alertParent(data) {
    alert(data);
  }
  return (
    <div className="App">
      <h2>Sending Data from Child to Parent</h2>
      <User alert={alertParent}></User>
    </div>
  );
}

export default App;
