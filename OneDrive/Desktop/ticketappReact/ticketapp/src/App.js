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
      requests:  [
      {Issue: 'Testing', Date: 'Testing2', User: 'Testing3', Priority: 'Testing4'},
      {Issue: 'Testing5', Date: 'Testing6', User: 'Testing7', Priority: 'Testing8'},
      {Issue: 'Testing9', Date: 'Testing10', User: 'Testing11', Priority: 'Testing12'}
      ]
    }
  }
  render() {
    return(
      <Router>
        <div>
          <Route exact path='/'>
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
