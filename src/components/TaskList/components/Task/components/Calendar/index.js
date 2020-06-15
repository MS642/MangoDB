import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { CALENDARICON } from "../../Icon";


const Calendar = (props) => {
  const [selectedDate, setSelectedDate] = useState(props.dueDate);
  const Icon = ({ value, onClick }) => {
    return (
      <span>
        <span className="example-custom-input" onClick={onClick}> 
          {selectedDate ? value : CALENDARICON}
        </span>
        {!selectedDate ? "": (<span onClick={date => setSelectedDate(null)}> X </span>) }
      </span>
    );
  };
  return (
    <DatePicker
      selected={selectedDate}
      onChange={date => setSelectedDate(date)}
      customInput={<Icon />}
      todayButton="Today"
      // showTimeSelect
      // timeFormat="HH:mm"
      // timeIntervals={15}
      // timeCaption="time"
      // dateFormat="MMMM d, yyyy h:mm aa"
    />
  );
}

export default Calendar;