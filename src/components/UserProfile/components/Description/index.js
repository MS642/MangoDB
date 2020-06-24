import * as React from "react";

class UserDescription extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div style={{ border: "2px solid black" }}>
        <div className="row">
          <div className="col text-center">
            <p id="nameField">{name}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default UserDescription;
