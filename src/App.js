import React, { Component } from 'react';
import './App.css';
import ReduceIcon from './icons/reduce.png'
import IncreaseIcon from './icons/increase.png'
import Day from './Day'

class App extends Component {

  state = {
    year: 2018,
    month: 4
  };

  decreaseMonth = () => {
    let month = this.state.month;
    if(month === 0){
      month = 11;
      this.setState({year: this.state.year - 1})
    }

    else {
      month --;
    }

    this.setState({month})

  }

  increaseMonth = () => {
    let month = this.state.month;
    if(month === 11){
      month = 0;
      this.setState({year: this.state.year + 1})
    }

    else {
      month ++;
    }

    this.setState({month})

  }

  decreaseYear = () => {


    this.setState({year: this.state.year - 1})

  }

  increaseYear = () => {
    this.setState({year: this.state.year + 1})

  }

  render() {

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const {year, month} = this.state;

    const day = 1;
    const days = [];

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
        <p>
          <img className='change-time' alt='decrease month' src={ReduceIcon} onClick={this.decreaseMonth}/>
            {months[this.state.month]}
          <img className='change-time' alt='increase month' src={IncreaseIcon} onClick={this.increaseMonth}/>
          <img className='change-time' alt='decrease year' src={ReduceIcon} onClick={this.decreaseYear}/>
            {this.state.year}
          <img className='change-time' alt='increase year' src={IncreaseIcon} onClick={this.increaseYear}/>
        </p>
      </div>


          <div className="week-grid">
          {  dayNames.map(day => (

              <div key={day}className="week-day">{day}</div>
            ))
          }
            </div>

          <div className="month-grid">
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
