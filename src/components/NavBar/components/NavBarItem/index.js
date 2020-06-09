import * as React from "react";
import "../../navbar.css";

class NavBarItem extends React.Component {
  render() {
    return (
      <div className="navbar-item">
        <button className="navbar-button">
          <img src={this.props.img} alt="" />
        </button>
      </div>
    );
  }
}

export default NavBarItem;
