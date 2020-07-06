import * as React from "react";
import "../../UserProfile.css";
import CreateIcon from '@material-ui/icons/Create';
import { IconButton } from '@material-ui/core';


class UserDescription extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nameEditActive: true
    }
  };

  makeEditActive = () => {
    this.setState({
      nameEditActive: !this.state.nameEditActive
    });
  };


  render() {
    const { name } = this.props;
    return (
      <div id={"nameBox"}>
        <div className="row">
          <div className="col-9 d-flex justify-content-center align-items-center">
            <input id={"nameInput"} style={{backgroundColor: (this.state.nameEditActive)? "#343a40": "#4a535c"}} type="text" defaultValue={name}  disabled={this.state.nameEditActive}/>
          </div>
          <div className="col-2 d-flex justify-content-center text-center">
            <IconButton id={"nameEditBtn"} onClick={this.makeEditActive}><CreateIcon id={"nameEditIcon"}/></IconButton>
          </div>
          <div className={"col-1"}></div>
        </div>
      </div>
    );
  }
}

export default UserDescription;
