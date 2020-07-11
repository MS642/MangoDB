import React from "react";
import { CALENDARICON } from "assets/Icon";

class DateItem extends React.Component {
  render() {
    const { value, onClick, handleDateChange } = this.props;
    return (
      <span>
        <button className="date-custom-input" type="button" onClick={onClick}>
          {value || CALENDARICON}
        </button>
        <span className="cursor-pointer">
          {!value ? (
            ""
          ) : (
            <button type="button" onClick={() => handleDateChange()}>
              {" "}
              X{" "}
            </button>
          )}
        </span>
      </span>
    );
  }
}

export default DateItem;
