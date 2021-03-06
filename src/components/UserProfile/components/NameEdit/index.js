import * as React from "react";
import "../../UserProfile.css";
import CreateIcon from "@material-ui/icons/Create";
import { IconButton } from "@material-ui/core";
import { connect } from "react-redux";
import SaveIcon from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import { updateNameDB } from "actions/profileActions";

class UserDescription extends React.Component {
  constructor(props) {
    super(props);
    const { userProfile } = this.props;
    this.state = {
      nameEditActive: false,
      name: userProfile.username,
    };
  }

  toggleEditActive = () => {
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

  onNameSubmit = () => {
    const { currUser, updateNameDB: updateName } = this.props;
    const { name } = this.state;
    this.toggleEditActive();
    updateName({
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
      <div id="editBox">
        <div className="row">
          <div className="col-9 inputDiv d-flex justify-content-center align-items-center">
            <ThemeProvider theme={theme}>
              <TextField
                multiline
                id="editInput"
                onChange={this.onNameChange}
                style={{
                  backgroundColor: nameEditActive ? "#075255" : "transparent",
                }}
                type="text"
                defaultValue={userProfile.username}
                disabled={!nameEditActive}
              />
            </ThemeProvider>
          </div>
          <div className="col-2 d-flex justify-content-center text-center">
            <OverlayTrigger
              key="top"
              placement="top"
              overlay={
                <Tooltip>
                  {!nameEditActive ? (
                    <div>Click to Edit Username</div>
                  ) : (
                    <div>Click to Save</div>
                  )}
                </Tooltip>
              }
            >
              <IconButton
                id="editBtn"
                onClick={
                  !nameEditActive ? this.toggleEditActive : this.onNameSubmit
                }
              >
                {!nameEditActive ? (
                  <CreateIcon className="editIcon" />
                ) : (
                  <SaveIcon id="editSaveIcon" />
                )}
              </IconButton>
            </OverlayTrigger>
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
    currUser: state.currentUserID,
    userProfile: state.userProfileDB,
  };
};

export default connect(mapStateToProps, { updateNameDB })(UserDescription);
