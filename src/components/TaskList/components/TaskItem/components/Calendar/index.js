import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DateItem from './components/DateItem'; 

const Calendar = (props) => {
  const { dueDate, handleDateChange } = props;
  return (
    <DatePicker
      selected={dueDate}
      onChange={date => handleDateChange(date)}
      customInput={<DateItem handleDateChange={handleDateChange}/>}
      todayButton="Today"
      dateFormat="MMMM d"
    />
  );
};

export default Calendar;
