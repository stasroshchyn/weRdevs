import CalendarConsts from './CalendarConsts';

export const getPrevMonth = (currentDate) => new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate());

export const getNextMonth = (currentDate) => {
  const isNextYear = currentDate.getMonth() + 1 === 12;
  const nextMonth = isNextYear ? 0 : currentDate.getMonth() + 1;
  const nextYear = isNextYear ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
  return new Date(nextYear, nextMonth, currentDate.getDate());
};

const getDaysInMonth = (year, month) =>
  // day === 0 gets the last day from the previous month
  new Date(year, month + 1, 0).getDate();

const getFirstDayByDate = (year, month) => new Date(year, month, 1).getDay();

const generateArray = (length) => Array(length).fill(0);

const getCellData = (year, month, day) => ({
  monthText: CalendarConsts.MONTHS_MAP[month],
  monthNumeric: month,
  dayText: CalendarConsts.DAYS_MAP[new Date(year, month, day).getDay()],
  dayNumeric: day,
  year: year
});

export const getCalendarDays = (currentDate) => {
  const prevMonthDates = [];
  const currentMonthDates = [];
  const nextMonthDates = [];

  const date = new Date(currentDate);
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();

  const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth);

  // add dates for current month
  generateArray(daysInCurrentMonth).forEach(
    (i, idx) => {
      const cellData = getCellData(currentYear, currentMonth, idx + 1);
      currentMonthDates.push(cellData);
    },
  );

  const firstDayNumeric = getFirstDayByDate(currentYear, currentMonth);
  // const firstDayWord = daysMap[firstDayNumeric];
  const daysInWeek = 7;
  const isOnlyOneMonth = daysInCurrentMonth % daysInWeek === 0 && firstDayNumeric === 0;
  const numberOfRows = isOnlyOneMonth
    ? daysInCurrentMonth / daysInWeek
    : Math.ceil((firstDayNumeric + daysInCurrentMonth) / daysInWeek);

  if (!isOnlyOneMonth) {
    // if our first day of month is not Sunday - add dates from previous month
    const prevMonthDaysCount = getDaysInMonth(currentYear, currentMonth - 1);
    generateArray(firstDayNumeric).forEach(
      (i, idx) => {
        const cellData = getCellData(currentYear, currentMonth - 1, prevMonthDaysCount - firstDayNumeric + idx + 1);
        prevMonthDates.push(cellData);
      }
    );

    // add dates from next month as well
    const numberOfDaysFromNextMonth = (numberOfRows * daysInWeek) - daysInCurrentMonth - firstDayNumeric;
    generateArray(numberOfDaysFromNextMonth).forEach(
      (i, idx) => {
        const cellData = getCellData(currentYear, currentMonth + 1, idx + 1);
        nextMonthDates.push(cellData);
      },
    );
  }

  return [...prevMonthDates, ...currentMonthDates, ...nextMonthDates];
};