import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Home from './components/Home';
import AddTicket from './components/AddTicket'
import About from './components/About'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      requests:  []
    }
  }
  render() {
    return(
      <Router>
        <div>
          <Route exact path='/ticketapp'>
            <Redirect to='/dashboard' />
          </Route>
          <Route path='/dashboard' component={() => 
            <Home requests={this.state.requests} />
          } />
          <Route path='/addticket' component={() =>
            <AddTicket requests={this.state.requests} />} />
          <Route path='/about' component={About} />
        </div>
      </Router>
    );
  };
}

export default App;
