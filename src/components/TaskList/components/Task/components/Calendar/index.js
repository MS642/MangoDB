import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CALENDARICON } from "../../Icon";

const Calendar = (props) => {
  // const [selectedDate, setSelectedDate] = useState(props.dateValue);
  const { dateValue, handleDateChange } = props;
  const Icon = ({ value, onClick }) => {
    return (
      <span>
        <span className="example-custom-input" onClick={onClick}> 
          {dateValue ? value : CALENDARICON}
        </span>
        {!dateValue ? "": (<span onClick={date => handleDateChange()}> X </span>) }
      </span>
    );
  };
  return (
    <DatePicker
      selected={dateValue}
      onChange={date => handleDateChange(date)}
      customInput={<Icon />}
      todayButton="Today"
      dateFormat="MMMM d"
    />
  );
};

export default Calendar;
