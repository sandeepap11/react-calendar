import React, { Component } from 'react';
import './App.css';
import Day from './Day';
import Month from './Month'
import { Route } from 'react-router-dom'

class App extends Component {

  render(){

    return(

      <div>

        <Route exact path='/' render={

  				() => (	<Month/> )

  			}/>
        <Route exact path='/date/:date/month/:month/day/:day' component={ Day }/>
      </div>
    )


  }
}

export default App;
