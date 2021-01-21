import React, { Component } from 'react';
import Header from './Header'
import Calendar from './Calendar'
import Request from './Requests'
import '../style/Home.css'

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
          <div className='main-row'>
            <div className='req-table'>
              <Request requests={this.props.requests}></Request>
            </div>
            <div className='calendar'>
              <Calendar />
            </div>
          </div>
      </React.Fragment>
     );
    }
}

export default Home;