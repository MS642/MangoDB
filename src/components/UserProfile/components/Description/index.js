import * as React from "react";
import "../../UserProfile.css";
import CreateIcon from '@material-ui/icons/Create';
import { IconButton } from '@material-ui/core';
import { connect } from "react-redux";
import {updateName} from "./actions";
import SaveIcon from '@material-ui/icons/Save';
import TextField from "@material-ui/core/TextField";

class UserDescription extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nameEditActive: true,
      name: this.props.currUserName
    }
  };

  makeEditActive = () => {
    this.setState({
      nameEditActive: !this.state.nameEditActive
    });
  };

  onNameChange = (e) => {
    this.setState({
      name: e.target.value
    });
  };

  onNameSubmit = (e) => {
    this.props.updateName({userID: this.props.currUser, newName: this.state.name});
  };


  render() {
    const { name, currUserName } = this.props;
    return (
      <div id={"nameBox"}>
        <div className="row">
          <div className="col-9 d-flex justify-content-center align-items-center">
            <input id={"nameInput"} onChange={this.onNameChange} style={{backgroundColor: (this.state.nameEditActive)? "#343a40": "#4a535c"}} type="text" defaultValue={currUserName}  disabled={this.state.nameEditActive}/>
          </div>
          <div className="col-2 d-flex justify-content-center text-center">
            <IconButton id={"nameEditBtn"} onClick={this.makeEditActive}>{(this.state.nameEditActive)? <CreateIcon id={"nameEditIcon"} /> : <SaveIcon id={"nameEditIcon"} onClick={this.onNameSubmit}/>}</IconButton>
          </div>
          <div className={"col-1"}></div>
        </div>
      </div>
    );
  }
}


// state has entire state of app!!
const mapStateToProps = (state) => {
  return {
    currUser: state.user.currentUserID,
    currUserName: state.user.currentUserName
  };
};

export default connect(mapStateToProps, {updateName})(UserDescription);

