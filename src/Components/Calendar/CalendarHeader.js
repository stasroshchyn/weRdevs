import React from 'react';
import CalendarConsts from './CalendarConsts';

const CalendarHeader = ({prevClick, nextClick, currentDate}) => {
  return (
	<div className="calendar__header">
		<div className="calendar__prev">
			<i onClick={prevClick} className="fas fa-angle-left calendar__arrow"></i>
		</div>
		<div className="calendar__month">
			{CalendarConsts.MONTHS_MAP[currentDate.getMonth()]}&nbsp;
      		{currentDate.getFullYear()}
		</div>
		<div className="calendar__next">
			<i onClick={nextClick} className="fas fa-angle-right calendar__arrow"></i>
		</div>
    </div>
  )
};

export default CalendarHeader;