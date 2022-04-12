import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App(props) {

  let [counts, setCounts] = useState([0,1,2,3,4,5,6,7,8,9]);
  let [count, setCount] = useState(0);

  const _onClick = () => {
    setCount(count + 1)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <p>{props.title}</p>
        {counts.map((count, ndx) => {
          return <p>{count}</p>
        })}
        <img src={logo} className="App-logo" alt="logo" />
        <p>Count - {count}</p>
        <button onClick={_onClick}>
          Learn React
        </button>
      </header>
    </div>
  );
}

export default App;
