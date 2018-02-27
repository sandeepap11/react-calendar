import React, { Component } from 'react';

class Day extends Component {

  render(){

    let { month, date, day } = this.props;

    if(this.props.match !== undefined){
    date = this.props.match.params.date;
    month = this.props.match.params.month;
    day = this.props.match.params.day;

    }
    return(

      <div>
        <div className="day-box">
          <h4>{ month }</h4>
            <h1>{ date }</h1>
          <h5>{ day }</h5>
        </div>
      </div>

    )
  }

}


export default Day;
