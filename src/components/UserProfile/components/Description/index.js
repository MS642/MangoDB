import * as React from "react";
import "../../UserProfile.css";
import CreateIcon from "@material-ui/icons/Create";
import { IconButton } from "@material-ui/core";
import { connect } from "react-redux";
import SaveIcon from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import { updateNameDB } from "../../../../actions/profileActions";

class UserDescription extends React.Component {
  constructor(props) {
    super(props);
    const { userProfile } = this.props;
    this.state = {
      nameEditActive: true,
      name: userProfile.username,
    };
  }

  makeEditActive = () => {
    const { nameEditActive } = this.state;
    this.setState({
      nameEditActive: !nameEditActive,
    });
  };

  onNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  onNameSubmit = (e) => {
    const { currUser } = this.props;
    const { name } = this.state;
    this.props.updateNameDB({
      userID: currUser,
      newName: name,
    });
  };

  render() {
    const theme = createMuiTheme({
      palette: {
        primary: {
          light: "#fcb540",
          main: "#FCA311",
          dark: "#b0720b",
          contrastText: "#fff",
        },
      },
    });
    const { userProfile } = this.props;
    const { nameEditActive } = this.state;
    return (
      <div id="nameBox">
        <div className="row">
          <div className="col-9 inputDiv d-flex justify-content-center align-items-center">
            <ThemeProvider theme={theme}>
              <TextField
                multiline
                id="nameInput"
                onChange={this.onNameChange}
                style={{
                  backgroundColor: nameEditActive ? "#343a40" : "#4a535c",
                }}
                type="text"
                defaultValue={userProfile.username}
                disabled={nameEditActive}
              />
            </ThemeProvider>
          </div>
          <div className="col-2 d-flex justify-content-center text-center">
            <IconButton id="nameEditBtn" onClick={this.makeEditActive}>
              {nameEditActive ? (
                <CreateIcon id="nameEditIcon" />
              ) : (
                <SaveIcon id="nameSaveIcon" onClick={this.onNameSubmit} />
              )}
            </IconButton>
          </div>
          <div className="col-1" />
        </div>
      </div>
    );
  }
}

// state has entire state of app!!
const mapStateToProps = (state) => {
  return {
    currUser: state.user.currentUserID,
    userProfile: state.userProfileDB.user,
  };
};

export default connect(mapStateToProps, { updateNameDB })(UserDescription);
