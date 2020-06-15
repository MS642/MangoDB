import * as React from "react";

class UserDescription extends React.Component {

    render() {
        return (
            <div style={{border: "2px solid black"}}>
              <div className={"row"}>
                  <div className={"col"}>
                      <p id={"nameField"}>Patrick Star</p>
                  </div>
              </div>
            </div>
        );
    }
}

export default UserDescription;
