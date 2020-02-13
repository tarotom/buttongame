import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [playerOnePoints, setPlayerOnePoints] = useState(20);
  const [playerTwoPoints, setPlayerTwoPoints] = useState(20);
  const [pointTillReward, setPointsTillReward] = useState(5);

  return (
    <div className="App">
      <header className="App-header">
        <div className="Title">Button Game</div>

        <div className="Counter">
          <label>Counter</label>
          <label>{counter}</label>
        </div>

        <div className="PlayerOne">
          <label>Player One</label>
          <label>Points: {playerOnePoints}</label>
          <label>Clicks till next reward: {pointTillReward}</label>
          <button>Click</button>
        </div>

        <div className="PlayerTwo">
          <label>Player Two</label>
          <label>Points: {playerTwoPoints}</label>
          <label>Clicks till next reward: {pointTillReward}</label>
          <button>Click</button>
        </div>

      </header>
    </div>
  );
}

export default App;
