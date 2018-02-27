import React, { Component } from 'react';
import './App.css';
import Day from './Day'

class App extends Component {

  state = {
    year: 2018,
    month: 4
  }

  render() {

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const {year, month} = this.state;

    const day = 1;
    const days = []

    const today = new Date(year, month, day);
    console.log(today);
    let monthEndDate = 31;

    if(today.getMonth() === 1){
      if(today.getFullYear() % 4 === 0){
        monthEndDate = 29;
      }
      else {
        monthEndDate = 28;
      }
    }
    else {
      if(today.getMonth() === 4 || today.getMonth() === 6 || today.getMonth() === 9 || today.getMonth() === 11){
        monthEndDate = 30;
      }
    }

    console.log(monthEndDate);

    let startDate = new Date(year, month, day);
    startDate.setDate(1);

    let endDate = new Date(year, month, day);
    endDate.setDate(monthEndDate);


    for(let i= 1-today.getDate()-startDate.getDay(); i<=monthEndDate-today.getDate() + (6-endDate.getDay()); i++)
    {
      let date = new Date(year, month, day);
      date.setDate(date.getDate()+i);

      days.push(date);

    }

    return (
      <div className="App">
      <div>
        {months[this.state.month]} {this.state.year}
      </div>
        <div className="App-Header">

        {
            days.map(day => (

              <Day key={ day.getDate() + "-" + day.getMonth()} month={ months[day.getMonth()] } date={ day.getDate() } day={ dayNames[day.getDay()] }/>
            ))

        }

        </div>
      </div>
    );
  }
}

export default App;
