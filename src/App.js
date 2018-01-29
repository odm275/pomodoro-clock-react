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
  this.plusTime = this.plusTime.bind(this);

  }
  start(e){
    e.preventDefault();
    const goal = new Date().getTime() + this.state.session; 
    let timer = () =>{
      let now = new Date().getTime();// New time that approaches goal second by second
      let distance = goal - now; //in Milliseconds
      let time = timeFormat(distance);
      this.setState({time});
      if (distance < 0) {
        clearInterval(x);
      }
    }
    timer();
    let x = setInterval(timer,1000);
  }
  plusTime(time){
  let add = this.state.session + this.minute;
  this.setState({session:add});    
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
          return(<h1>{timeFormat(time,true)}</h1>)
        })}
        <h1>{this.state.time ? this.state.time: timeFormat(this.state.session)}</h1>
        <button onClick={this.start}>Start</button>
        <button onClick={this.plusTime}>+</button>
        <button>-</button>
      </div>
    );
  }
}


function timeFormat(milliseconds, bool){
  const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);      
  if(bool){
    return minutes;
  }else{
    return minutes + ': ' + seconds;
  }

}

export default App;
