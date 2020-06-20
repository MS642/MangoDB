import React from "react";
import { CALENDARICON } from "assets/Icon";

class DateItem extends React.Component {
  render() {
    const { value, onClick, handleDateChange } = this.props;
    return (
      <span>
        <span className="date-custom-input" role="button" tabIndex={0} onClick={onClick}>
          {value || CALENDARICON}
        </span>
        {!value ? "" : <span onClick={() => handleDateChange()}> X </span>}
      </span>
    );
  }
}

export default DateItem;
