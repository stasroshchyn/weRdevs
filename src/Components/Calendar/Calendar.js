import React, {Component} from 'react';
import CalendarGrid from './CalendarGrid';
import CalendarHeader from './CalendarHeader';
import CalendarFooter from './CalendarFooter';
import {getPrevMonth, getNextMonth} from './CalendarUtils';
import './Calendar.scss';

class Calendar extends Component {
  
  state = {currentDate: new Date()};

  prevClick = () => this.setState({currentDate: getPrevMonth(this.state.currentDate)});

  nextClick = () => this.setState({currentDate: getNextMonth(this.state.currentDate)});

  render() {
    const {currentDate} = this.state;
    const {handleCellClick} = this.props;

    return (
      <div className="calendar">
        <CalendarHeader
          prevClick={this.prevClick}
          nextClick={this.nextClick}
          currentDate={currentDate}
        />
        <CalendarGrid currentDate={currentDate} handleCellClick={handleCellClick}/>
        <CalendarFooter/>
      </div>
    );
  }
}

export default Calendar;