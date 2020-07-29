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

import { updateProfileUrlDB } from "actions/profileActions";

class ProfileUrlEdit extends React.Component {
  constructor(props) {
    super(props);
    const { userProfile } = this.props;
    this.state = {
      editActive: true,
      profileUrl: userProfile.profileUrl,
    };
  }

  toggleEditActive = () => {
    const { editActive } = this.state;
    this.setState({
      editActive: !editActive,
    });
  };

  onProfileUrlChange = (e) => {
    this.setState({
      profileUrl: e.target.value,
    });
  };

  onProfileUrlSubmit = () => {
    const { currUser, updateProfileUrlDB: updateProfileUrl } = this.props;
    const { profileUrl } = this.state;
    this.toggleEditActive();
    updateProfileUrl({
      userID: currUser,
      newProfileUrl: profileUrl,
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
    const { editActive } = this.state;
    return (
      <div id="editBox">
        <div className="row">
          <div className="col-9 inputDiv d-flex justify-content-center align-items-center">
            <ThemeProvider theme={theme}>
              <TextField
                multiline
                id="editInput"
                onChange={this.onProfileUrlChange}
                style={{
                  backgroundColor: editActive ? "#343a40" : "#4a535c",
                }}
                type="text"
                defaultValue={userProfile.profileUrl}
                disabled={editActive}
              />
            </ThemeProvider>
          </div>
          <div className="col-2 d-flex justify-content-center text-center">
            <OverlayTrigger
              key="top"
              placement="top"
              overlay={
                <Tooltip>
                  {editActive ? (
                    <div>Click to Edit Profile Url</div>
                  ) : (
                    <div>Click to Save</div>
                  )}
                </Tooltip>
              }
            >
              <IconButton
                id="editBtn"
                onClick={
                  editActive ? this.toggleEditActive : this.onProfileUrlSubmit
                }
              >
                {editActive ? (
                  <CreateIcon id="editIcon" />
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

const mapDispatchToProps = {
  updateProfileUrlDB,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileUrlEdit);
