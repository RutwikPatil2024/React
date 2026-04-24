import { useState } from 'react'
import './App.css'
import { useRef } from 'react';

function App() {
  const [time, settime] = useState(0);

  let timeref = useRef(null);

  function starttimer() {
    timeref.current=setInterval(() => {
      settime(time=>time+1);
    }, 1000);
  }

  function stoptimer() {
    clearInterval(timeref.current);
    timeref.current = null;
  }

  function resettimer() {
    stoptimer();
    settime(0);
  }

  return (
    <div>
      <h1>StopWatch : {time } seconds</h1>
      <br /><br />
      <button onClick={starttimer}>
        Start Timer
      </button>
      <br /><br />
      <button onClick={stoptimer}>
        Stop Timer
      </button>
      <br /><br />
      <button onClick={resettimer}>
        Reset Timer
      </button>
    </div>
  );
}

export default App
