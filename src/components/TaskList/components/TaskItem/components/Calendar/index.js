import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DateItem from "./components/DateItem";

class Calendar extends React.Component {
  render() {
    const { dueDate, handleDateChange } = this.props;
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
  }
}

export default Calendar;
