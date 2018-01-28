import React, { Component } from 'react'
//import Moment from 'react-moment'
import 'moment-timezone'
import './App.css'

class App extends Component {
  constructor(){
    super();
    
    this.second = 1000;
    this.minute = this.second*60;
    this.state = {
      session: new Date(this.minute*25).getTime(),
      shortBreak: new Date(this.minute*5).getTime(),
      longBreak: new Date(this.minute*10).getTime(),
      time: ''
    };

  this.start = this.start.bind(this);
  }
  start(e){
    e.preventDefault();
    const goal = new Date().getTime() + this.state.session;
    //  BEGIN COUNTDOWN
    let x = setInterval(() => {
      let now = new Date().getTime();// New time that approaches goal second by second
      let distance = goal - now; //in Milliseconds
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));      
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      let time = minutes + ': ' + seconds;
      console.log(time);
      this.setState({
        time: time
      });
      console.log(this.time);
      if (distance < 0) {
        clearInterval(x);
    }
    },this.second);
  }
  plusTime(time){
    
  }
  minusTime(time){

  }

  render() {
    const times = [this.state.session
                  ,this.state.shortBreak
                  ,this.state.longBreak];
    return (

      <div className="App">
        <h1>Pomodoro City</h1>
        {times.map(time=>{
          return(<h1>{time}</h1>)
        })}
        <h1>{this.time ? this.time:'lol'}</h1>
        <button onClick={this.start}>Start</button>
        <button>+</button>
        <button>-</button>
      </div>
    );
  }
}

export default App;
