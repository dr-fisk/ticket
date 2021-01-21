import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Header from './Header'
import '../style/AddTicket.css'

class AddTicket extends Component {
    constructor(props) {
        super(props);
        var date = new Date();
        this.state = {
            issue: null,
            date: date,
            user: null,
            priority: null,
        }
    }
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className='ticket-submit'>
                  <form id='ticket' onSubmit={this.addTicket}>
                      Issue: <br /><input type='text' name='issue' onChange={this.inputChange} placeholder='Enter your issue' /><br />
                      User: <br /><input type='text' name='user' onChange={this.inputChange} placeholder='Enter your name/username' /><br />
                      Priority: <br /><input type='text' name='priority' onChange={this.inputChange} placeholder='Enter priority level' /><br />
                      <br /><input type='submit' value='Submit'></input>
                  </form>
                </div>
            </React.Fragment>
        );
    }

    inputChange = (event) => {
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value})
    }

    // Add a check to ensure that all text fields contain an input
    addTicket = (event) => {
        event.preventDefault();

        if (this.state.issue != null && this.state.priority != null && this.state.user != null) {
            var date = (this.state.date.getMonth() + 1) + '/' + this.state.date.getDate() + '/' + this.state.date.getFullYear();

            var newTicket = {
               Issue: this.state.issue,
               Date: date,
               User: this.state.user,
              Priority: this.state.priority
            }
        
         this.props.requests.push(newTicket);
         return 0;
        }

        return <br></br>;
    }
}

export default AddTicket;