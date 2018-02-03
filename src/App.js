
import React, { Component } from 'react'
import Timer from './Timer';
import Add from './Add';
import './App.css'

class App extends Component {
  constructor(){
    super();
    this.second = 1000;
    this.minute = this.second*60;
    this.session = new Date(this.minute*25).getTime();
    this.shortBreak = new Date(this.minute*5).getTime();
    this.longBreak = new Date(this.minute*10).getTime();
    //this.n = 0;

    this.state = {
      session: timeFormat(this.session),
      shortBreak: timeFormat(this.shortBreak),
      longBreak: timeFormat(this.longBreak),
    };

  }

  start(type){
    //if(this.n % 8 === 0 && this.n !== 0) {
    const goal = new Date().getTime() + this[type];
    let timer = () => {
      console.log(type);
      let now = new Date().getTime();// New time that approaches goal second by second
      let distance = goal - now; //in Milliseconds
      let time = timeFormat(distance); //Translate to correct format
      this.setState({
        [type]: time //[type] makes an otherwise string a valid property.
      });
      if (distance === 0) {
        clearInterval(x);
      }
    }
    timer();
    let x = setInterval(timer,1000);
  }

  plusTime(type){
    console.log(type);
    this[type] = this[type] + this.minute;
    let formatAdd = timeFormat(this[type]);
    this.setState({[type]:formatAdd});
  }

  minusTime(type){
    console.log(this[type]);    
    this[type] = this[type] - this.minute;
    let formatSub = timeFormat(this[type]);
    this.setState({[type]:formatSub});
  }

  render() {

    return (
      <div className="App"> 
        <Timer  
          time = {this.state.session}
          start = {() => this.start('session')}
        />
        <Add 
          add = {() => this.plusTime('session')}
          sub = {() => this.minusTime('session')}
        />
        <Add 
          add = {() => this.plusTime('shortBreak')}
          sub = {() => this.minusTime('shortBreak')}
        />
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
