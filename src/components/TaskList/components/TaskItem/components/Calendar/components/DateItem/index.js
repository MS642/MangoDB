import React from "react";
import { CALENDARICON } from "assets/Icon";

class DateItem extends React.Component {
  render() {
    const { value, onClick, handleDateChange } = this.props;
    return (
      <span>
        <span className="example-custom-input" onClick={onClick}> 
          {value ? value : CALENDARICON}
        </span>
        {!value ? "": (<span onClick={date => handleDateChange()}> X </span>) }
      </span>
    );
  }
}

export default DateItem;