import React, {useState} from 'react';
import Parent from './components/Parent';
import CounterContext from './CounterContext';
import './App.css';

function App() {
  //let [ count, setCount ] = useState(30)
  let countState = useState(0)

  return (
    <CounterContext.Provider value={countState}>
      <div>
        <Parent />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
