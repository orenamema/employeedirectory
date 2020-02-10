import React from 'react';
import './App.css';
import DatatablePage from "./components/DatatablePage";

function App() {
  return (
    <div className="App">

<div className="Header">
  <h1>Employee Directory </h1>
  <h8>Click on carrots to filter by heading or use the search box to narrow your results</h8>
</div>
        <DatatablePage/>

    </div>
  );
}

export default App;
