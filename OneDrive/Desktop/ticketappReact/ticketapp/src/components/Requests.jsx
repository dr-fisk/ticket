import React, { Component } from 'react';
import '../style/Requests.css'


class Request extends Component{
    constructor(props) {
        super(props);
        this.state = {
            tableHeader: ['Issue', 'Date', 'User', 'Priority'],
            requests: [],
            page : 1
        }
    }

    componentDidMount() {
      // Uncomment when requests are designed nicely
      //this.splitRequestsToPages();
    }

    render () {
        return (
            <table className='requests'>
              <thead>
                <tr>{this.state.tableHeader.map(item => (
                    <th key={item}>{item}</th>
                ))}</tr>
              </thead>
              <tbody>
                {this.state.requests.map((item, idx, array) => (
                  <tr key={item + idx}>
                  {[<td key={'Issue' + idx}>{array[array.length - 1 - idx].Issue}</td>,
                    <td key={'Date' + idx}>{array[array.length - 1 - idx].Date}</td>,
                    <td key={'User' + idx}>{array[array.length - 1 - idx].User}</td>,
                    <td key={'Priority' + idx}>{array[array.length - 1 - idx].Priority}</td>]}</tr>
                ))}
              </tbody>
            </table>
        );
    }

    // Displays 10 items a page within the requests list
    splitRequestsToPages () {
      var reqs = [];

      for (var i = (10 * (this.state.page - 1)); i < (10 * this.state.page) && this.props.requests[i]; i ++)
        reqs.push(this.props.requests[i]);
        
      //console.log(reqs);
      this.setState({requests: reqs})
    }
}

export default Request;