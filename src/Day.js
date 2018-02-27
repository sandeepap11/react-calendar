import React, { Component } from 'react';

class Day extends Component {

  render(){

    const { month, date, day } = this.props;


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
