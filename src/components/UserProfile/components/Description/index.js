import * as React from "react";
import "../../UserProfile.css";
import CreateIcon from '@material-ui/icons/Create';
import { IconButton } from '@material-ui/core';
import { connect } from "react-redux";
import { updateNameDB } from "../../../../actions/profileActions";
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';


class UserDescription extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nameEditActive: true,
      name: this.props.userProfile.username
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
    this.props.updateNameDB({userID: this.props.currUser, newName: this.state.name});
  };


  render() {
    const theme = createMuiTheme({
      palette: {
        primary: {
          light: '#fcb540',
          main: '#FCA311',
          dark: '#b0720b',
          contrastText: '#fff',
        },
      },
    });
    const { userProfile } = this.props;
    return (
      <div id={"nameBox"}>
        <div className="row">
          <div className="col-9 inputDiv d-flex justify-content-center align-items-center">
            <ThemeProvider theme={theme}>
            <TextField  multiline id={"nameInput"} onChange={this.onNameChange} style={{backgroundColor: (this.state.nameEditActive)? "#343a40": "#4a535c"}} type="text" defaultValue={userProfile.username}  disabled={this.state.nameEditActive}/>
            </ThemeProvider>
          </div>
          <div className="col-2 d-flex justify-content-center text-center">
            <IconButton id={"nameEditBtn"} onClick={this.makeEditActive}>{(this.state.nameEditActive)? <CreateIcon id={"nameEditIcon"} /> : <SaveIcon id={"nameSaveIcon"} onClick={this.onNameSubmit}/>}</IconButton>
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
    userProfile: state.userProfileDB.user
  };
};

export default connect(mapStateToProps, {updateNameDB})(UserDescription);

