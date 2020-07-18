import * as React from "react";

import "../../navbar.css";
import "./navbaritem.css";

class NavBarItem extends React.Component {
  render() {
    const { icon } = this.props;
    return (
      <div className="navbar-item">
        <button type="button" className="navbar-button">
          <i className="material-icons navbar-icon">{icon}</i>
        </button>
      </div>
    );
  }
}

export default NavBarItem;
