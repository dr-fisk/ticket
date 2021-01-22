import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
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
            validForm: 1
        }
    }
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className='ticket-submit'>
                  <form id='ticket' onSubmit={this.addTicket}>
                      {this.renderForm()}
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
         this.setState({validForm: 1});
        }

        this.setState({validForm: 0})
    }

    renderForm() {
        var issueForm = (this.state.validForm === 0 && this.state.issue === null) 
                        ? <b key='issue'>Issue:<div className='error'>Please enter issue</div></b> : <b key='issue'>Issue:</b>;
        
        var userForm = (this.state.validForm === 0 && this.state.user === null) 
                        ? <b key='user'>User:<div className='error'>Please enter user input</div></b> : <b key='user'>User:</b>;
        
        var priorityForm = (this.state.validForm === 0 && this.state.priority === null) 
                        ? <b key='priority'>Priority:<div className='error'>Please enter priority (0-5)</div></b> : <b key='priority'>Priority:</b>;


        var ticketForm = [
            issueForm,
            <input type='text' name='issue' key='issue-form' onChange={this.inputChange} placeholder='Enter your issue'></input>,
            userForm,
            <input type='text' name='user' key='user-form' onChange={this.inputChange} placeholder='Enter your name/username' />,
            priorityForm,
            <input type='text' name='priority' key='priority-form' onChange={this.inputChange} placeholder='Enter priority level' />,
            <br key='newline1' />,
            <br key='newline2' />,
            <input type='submit' value='Submit' key='submit-button'></input>
        ] 

        return ticketForm;
    }
}

export default AddTicket;