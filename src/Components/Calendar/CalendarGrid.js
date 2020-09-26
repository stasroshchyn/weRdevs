import React from 'react';
import {getCalendarDays} from './CalendarUtils';
import './Calendar.scss';

const CalendarGrid = ({currentDate, handleCellClick}) => {
	const onClick = (cellData) => (event) => {
		if (cellData.dayNumeric == 1) {
			cellData.dayNumeric = cellData.dayNumeric +'st';
		} else if (cellData.dayNumeric == 2) {
			cellData.dayNumeric = cellData.dayNumeric +'nd';
		} else if (cellData.dayNumeric == 3) {
			cellData.dayNumeric = cellData.dayNumeric +'rd';
		} else {
			cellData.dayNumeric = cellData.dayNumeric +'th';
		}
		handleCellClick(cellData);
	};

	const calendarDays = getCalendarDays(currentDate),
		  date = new Date();

	return (
    	<div className="calendar__body">
        	{calendarDays.map((cellData, idx) => (
				<div
					key={idx}
					onClick={onClick(cellData)}
					className={`calendar__day ${(date.getDate() == cellData.dayNumeric) && (date.getFullYear() == cellData.year) && (date.getMonth() == cellData.monthNumeric) ? 'calendar__day_active' : ''}`}
				>	
						{cellData.dayNumeric}
				</div>
        	))}
    	</div>
  );
};



export default CalendarGrid;