import {useSearchParams} from 'react-router-dom'

function App() {
  const [searchparams] = useSearchParams();

  const name = searchparams.get("name");
  const age = searchparams.get("age");

  return (
    <div>
      <h1>Name : { name}</h1>
      <h1>Age : { age}</h1>
    </div>
  );
}

export default App;