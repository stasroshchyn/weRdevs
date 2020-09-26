import React from 'react';
import './Calendar.scss';

const CalendarFooter = () => {
    return (
        <div className="calendar__footer">
            <div className="calendar__weekday">S</div>
            <div className="calendar__weekday">M</div>
            <div className="calendar__weekday">T</div>
            <div className="calendar__weekday">W</div>
            <div className="calendar__weekday">T</div>
            <div className="calendar__weekday">F</div>
            <div className="calendar__weekday">S</div>
        </div>
    )
}

export default CalendarFooter;