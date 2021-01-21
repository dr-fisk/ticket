import React, { Component } from 'react';
import '../style/Calendar.css'

class Calendar extends Component {
    constructor(props) {
        super(props);
        var date = new Date();
        var month = date.getMonth();
        var year = date.getFullYear();
        var day = date.getDate();
        this.state = {
            dayName: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            monthName: ['January', 'February', 'March', 'April', 'May',
                        'June', 'July', 'August', 'September', 
                        'October', 'November', 'December'],
            currentDate: date,
            currentMonth: month,
            currentDay: day,
            currentYear: year,
            calendar: [],
        };
    }

    componentDidMount() {
        this.formatCalendar(this.state.currentMonth, this.state.currentYear);
    }

    render() { 
        return (
            <React.Fragment>
                <div className='calendar'>
                  <div className='month'>
                      <ul>
                        <button onClick={this.prevMonth} className='prev'>&#10094;</button>
                        <button onClick={this.nextMonth} className='next'>&#10095;</button>
                        <li>
                            {this.state.monthName[this.state.currentMonth]}
                        </li>
                        <span className='year'>{this.state.currentYear}</span>
                      </ul>
                  </div>
                  <div>
                      <ul className='weekdays'>
                          {this.state.dayName.map(item => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                  </div>
                  <div>
                    <ul className='day-container'>
                      {this.state.calendar.map((item, idx) => {
                        if (item.active === 3)
                            return <button onClick={this.nextMonth} value={item} className='inactive' key={idx}>{item.day}</button>
                        else if (item.active === 2)
                            return <button onClick={this.prevMonth} value={item} className='inactive' key={idx}>{item.day}</button>
                        else if (item.active === 1)
                            return <button onClick={this.getDay} value={item.day} className='active'  key={idx}>{item.day}</button>
                        else
                            return <button onClick={this.getDay} value={item.day} className='item' key={idx}>{item.day}</button>
                      })}
                    </ul>
                  </div>
                </div>
            </React.Fragment>
        );
    }

    getDay = (event) => {
        console.log(event.target.value);
    }

    prevMonth = () => {
        var currMonth = this.state.currentMonth - 1;

        if (currMonth < 0) {
            this.setState({currentMonth: 11,
                           currentYear: this.state.currentYear - 1}, () => {
                               this.formatCalendar(this.state.currentMonth, this.state.currentYear);
                           });
        } else {
            this.setState({currentMonth: currMonth}, () => {
                this.formatCalendar(this.state.currentMonth, this.state.currentYear);
            });
        }
    }

    nextMonth = () => {
        var currMonth = this.state.currentMonth + 1;

        if (currMonth > 11) {
            this.setState({currentMonth: 0,
                           currentYear: this.state.currentYear + 1}, () => {
                               this.formatCalendar(this.state.currentMonth, this.state.currentYear);
                           });
        } else {
            this.setState({currentMonth: currMonth}, () => {
                this.formatCalendar(this.state.currentMonth, this.state.currentYear);
            });
        }
    }

    // Active states: 0 is days in current month but not current day, 1 is the current day, 2 is days in prev month
    // 3 is days in next month
    formatCalendar = (currMonth, currYear) => {
        var arr = [];
        const calendarSize = 42;
        var dayOfWeek = new Date(currYear, currMonth, 1);
        var prevMonthDays = getNumDaysInMonth(currMonth - 1, currYear) - (dayOfWeek.getDay() - 1);

        // If first day of current month is not Sunday, then fill in up to day of week
        // With days from previous month
        for (var i = 1; i <= dayOfWeek.getDay(); i ++) {
            arr.push({active: 2, day: prevMonthDays});
            prevMonthDays ++;
        }
        
        // Adds normal days to calendar
        for (var j = 1; j <= getNumDaysInMonth(currMonth, currYear); j ++) {
            if (this.state.currentDay === j && this.state.currentDate.getMonth() === currMonth 
                && this.state.currentDate.getFullYear() === currYear)
                arr.push({active: 1, day: j});
            else
                arr.push({active: 0, day: j});
        }

        // Fills in the last couple of days in the calendar, if day is 31
        // Use days from next month starting at 1
        var daysToFillCal = 1

        for (var k = arr.length; k < calendarSize; k ++, daysToFillCal ++)
            arr.push({active: 3, day: daysToFillCal});

        this.setState({calendar: arr});
    }
}

function getNumDaysInMonth(month, year) {
    return 32 - new Date(year, month, 32).getDate();
}

export default Calendar;