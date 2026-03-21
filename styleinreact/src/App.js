import logo from './logo.svg';
import './App.css';
import './Style.css'
import style from './custom.module.css'
function App() {
 
  return (
    <div className="App">
      <h2>Applying Style in CSS</h2>
      <h3 className='primary'>Style1 in React</h3>
      <h3 style={{color:'red',fontSize:15}}>Style2 in React</h3>
      <h3 className={style.success}>Style3 in React</h3>

    </div>
  );
}

export default App;
