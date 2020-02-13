import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Title">Button Game</div>

        <div className="VerticalAlign">
          <label>Counter</label>
          <label></label>
        </div>

        <div className="PlayerOne">
          <label>Player One</label>
          <label>Points: </label>
          <label>Clicks till next reward: </label>
          <button>Click</button>
        </div>

        <div className="PlayerTwo">
          <label>Player One</label>
          <label>Points: </label>
          <label>Clicks till next reward: </label>
          <button>Click</button>
        </div>

      </header>
    </div>
  );
}

export default App;
