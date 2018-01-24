import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {time:25*1000}
  }
  render() {
    return (
      <div className="App">
        <h1>Pomodoro Timer</h1>
        <button>Start</button>
        <button>Stop</button>
        <button>Reset</button>
      </div>
    );
  }
}

export default App;
