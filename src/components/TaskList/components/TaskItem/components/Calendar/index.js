import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DateItem from "./components/DateItem";
import "./index.scss";

const Calendar = (props) => {
  const { dueDate, handleDateChange } = props;
  return (
    <div className="datePicker">
      <DatePicker
        selected={!dueDate ? dueDate : new Date(dueDate)}
        onChange={(date) => handleDateChange(date)}
        customInput={<DateItem handleDateChange={handleDateChange} />}
        todayButton="Today"
        dateFormat="MMMM d"
      />
    </div>
  );
};

export default Calendar;
