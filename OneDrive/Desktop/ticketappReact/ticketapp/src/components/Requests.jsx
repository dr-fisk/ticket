import React, { Component } from 'react';
import '../style/Requests.css'


class Request extends Component{
    constructor(props) {
        super(props);
        this.state = {
            tableHeader: ['Issue', 'Date', 'User', 'Priority'],
            requests: [],
            page: 1,
            pageList: [],
        }
    }

    componentDidMount() {
      // Uncomment when requests are designed nicely
      this.splitRequestsToPages();
    }

    render() {
        var noRequests = <div className='no-reqs'>There are no tickets!</div>;

        return !this.props.requests.length ? noRequests : (
          <div>
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
                      <td key={'Priority' + idx}>{array[array.length - 1 - idx].Priority}</td>]}
                  </tr>
                ))}
              </tbody>           
            </table>
            <div>
              <ul className='req-pages'>
                {this.state.pageList.map((item, idx) => {
                  return <button className='req-pages-idx' key={idx}>{item}</button>;
                })}
              </ul>
            </div>
          </div>
        );
    }

    // Displays 10 items a page within the requests list
    splitRequestsToPages() {
      var reqs = [];

      for (var i = (10 * (this.state.page - 1)); i < (10 * this.state.page) && this.props.requests[i]; i ++)
        reqs.push(this.props.requests[i]);
        
      //console.log(reqs);
      this.setState({requests: reqs}, () => {
        this.formatPages();
      })
    }

    // Formats page indeces on the bottom to scroll through the requests list
    // Allows for prev 2 indeces and next 2 indeces to be displayed;
    formatPages() {
      const pagesMaxSize = 6;
      const firstPageNumber = 1;
      const maxPage = Math.ceil(this.state.requests.length / 10);
      var pages = [];
      var i = this.state.page > 2 ? this.state.page - 2 : firstPageNumber;

      for (; i <= maxPage && pages.length < pagesMaxSize; i ++) {
        pages.push(i);
      }

      if (pages[pages.length] !== maxPage && pages.length === pagesMaxSize)
        pages[pages.length - 1] = maxPage;

      this.setState({pageList: pages})
    }
}

export default Request;