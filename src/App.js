
import React, { Component } from 'react'
import Timer from './container/Timer';
import Add from './container/Add';
import Settings from './container/Settings';

import './App.css'

class App extends Component {
  constructor(){
    super();
    this.second = 1000;
    this.minute = this.second * 60;
    this.session = new Date(this.minute*25).getTime();
    this.shortBreak = new Date(this.minute*5).getTime();
    this.longBreak = new Date(this.minute*10).getTime();
    this.n = 0;
    this.type = 'session';

    this.state = {
      session: timeFormat(this.session),
      shortBreak: timeFormat(this.shortBreak),
      longBreak: timeFormat(this.longBreak),
    };

    this.setTime = this.setTime.bind(this);
    
  }


  start(type){
    //if(this.n % 8 === 0 && this.n !== 0) {
    const goal = new Date().getTime() + this[type];
    let timer = () => {
      let now = new Date().getTime();// New time that approaches goal second by second
      let distance = goal - now // milliseconds
      
      
      let secDistance = Math.floor((goal - now) / 1000); //seconds
      let time = timeFormat(distance); // Translate to correct format
      
      if (secDistance === 0) {
        clearInterval(x);
        this.n += 1;
      }
      this.setState({
        [type]: time // [type] makes an otherwise string a valid property.
      });
    }
    timer();
    let x = setInterval(timer,1000);
  }

  plusTime(type){
    this[type] = this[type] + this.minute;
    let formatAdd = timeFormat(this[type]);
    this.setState({[type]:formatAdd});
  }

  minusTime(type){
    this[type] = this[type] - this.minute;
    let formatSub = timeFormat(this[type]);
    this.setState({[type]:formatSub});
  }

  setTime(type,event){

     let newTime = event.target.value*this.minute;
     this[type] = newTime;
     let formatSet = timeFormat(this[type]);
     this.setState({[type]:formatSet});
  }

  render() {
    const titleSession = 'Session';
    const titleBreak = 'Break';

    if(this.n % 2 === 0){
      this.type = 'session';
      if(this.n % 8 === 0 && this.n !==0 ){
        this.type = 'longBreak';
      }
    }else{
      this.type = 'shortBreak';
    }

    const addSub = {
      session: {add:() => this.plusTime('session'),
                sub:() => this.minusTime('session'),
                  },
      shortBreak: {add:() => this.plusTime('shortBreak'),
                  sub:() => this.minusTime('shortBreak'),
                  },
      longBreak: {add:() => this.plusTime('longBreak'),
                  sub:() => this.minusTime('longBreak'),
    }    
};



    return (
      <div className="App"> 
      <Add 
          title = {titleSession}
          add = {() => this.plusTime('session')}
          sub = {() => this.minusTime('session')}
          setTime = {this.state.session}
        />
        <Add 
          title = {titleBreak}
          add = {() => this.plusTime('shortBreak')}
          sub = {() => this.minusTime('shortBreak')}
          setTime = {this.state.shortBreak}
        />
        <Timer  
          time = {this.state[this.type]}
          start = {() => this.start(this.type)}
        />

        <Settings
          times = {this.state}
          session = {this.setTime.bind(this,'session')}
          shortBreak = {this.setTime.bind(this, 'shortBreak')}
          longBreak = {this.setTime.bind(this, 'longBreak')}
        />

      </div>
    );
  }
}

function timeFormat(milliseconds, bool){
  const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);      
    return minutes + ': ' + seconds;
}

export default App;
