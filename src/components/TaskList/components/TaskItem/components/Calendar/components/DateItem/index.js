import React from "react";
import CALENDAR_ICON from "services/IconHelper/ICON/CALENDAR_ICON";
import getIcon from "services/IconHelper/getIcon";
import "./index.scss";

class DateItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCalendarHover: false,
      isClearHover: false,
    };
  }

  setIsCalendarHover = (bool) => {
    this.setState({ isCalendarHover: bool });
  };

  setIsClearHover = (bool) => {
    this.setState({ isClearHover: bool });
  };

  render() {
    const { value, onClick, handleDateChange } = this.props;
    const { isCalendarHover, isClearHover } = this.state;
    return (
      <span
        onMouseEnter={() => this.setIsCalendarHover(true)}
        onMouseLeave={() => this.setIsCalendarHover(false)}
      >
        <button className="date-custom-input" type="button" onClick={onClick}>
          {value || getIcon(CALENDAR_ICON.calendar, isCalendarHover)}
        </button>
        <button
          type="button"
          className={isCalendarHover ? "" : "iconHide"}
          onClick={() => handleDateChange()}
          onMouseEnter={() => this.setIsClearHover(true)}
          onMouseLeave={() => this.setIsClearHover(false)}
        >
          {getIcon(CALENDAR_ICON.clear, isClearHover)}
        </button>
      </span>
    );
  }
}

export default DateItem;
