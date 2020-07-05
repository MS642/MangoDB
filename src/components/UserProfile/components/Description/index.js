import * as React from "react";
import "../../UserProfile.css";
import CreateIcon from '@material-ui/icons/Create';
import { IconButton } from '@material-ui/core';


class UserDescription extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div id={"nameBox"}>
        <div className="row">
          <div className="col-9 d-flex justify-content-center align-items-center text-center">
            {name}
          </div>
          <div className="col-2 d-flex justify-content-center text-center">
            <IconButton><CreateIcon id={"nameEditIcon"}/></IconButton>
          </div>
          <div className={"col-1"}></div>
        </div>
      </div>
    );
  }
}

export default UserDescription;
