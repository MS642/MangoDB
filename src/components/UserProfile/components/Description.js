import * as React from "react";
import "../../../App.css";
import "../../../App.scss";
import "../UserProfile.scss";
import "../UserProfile.css";

class UserDescription extends React.Component {

    render() {
        return (
            <div style={{border: "2px solid black"}}>
              <div className={"row"}>
                  <div className={"col text-center"}>
                      <p id={"nameField"}>Patrick Star</p>
                  </div>
              </div>
            </div>
        );
    }
}

export default UserDescription;
