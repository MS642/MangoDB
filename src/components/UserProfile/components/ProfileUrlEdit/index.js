import * as React from "react";
import "../../UserProfile.css";
import CreateIcon from "@material-ui/icons/Create";
import BlockIcon from "@material-ui/icons/Block";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import { IconButton } from "@material-ui/core";
import { connect } from "react-redux";
import SaveIcon from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import { updateProfileUrlDB } from "actions/profileActions";
import { getUserProfileUrl } from "actions/users";
import Spinner from "react-bootstrap/Spinner";
import { Popover } from "react-bootstrap";

class ProfileUrlEdit extends React.Component {
  constructor(props) {
    super(props);
    const { userProfile } = this.props;
    this.state = {
      editActive: false,
      profileUrl: userProfile.profileUrl,
      validProfileUrl: true,
    };
  }

  toggleEditActive = () => {
    const { editActive } = this.state;
    this.setState({
      editActive: !editActive,
    });
  };

  isInvalid = (value) => {
    return (
      value.length < 3 ||
      value.length > 100 ||
      /[\s~`!@#$%^&*+=\-[\]\\';,/{}|\\":<>?()._]/g.test(value)
    );
  };

  onProfileUrlChange = (e) => {
    const { value } = e.target;
    if (this.isInvalid(value)) {
      // Defined by OWASP
      this.setState({
        validProfileUrl: false,
      });
      return;
    }

    this.setState({
      validProfileUrl: true,
      profileUrl: e.target.value,
    });

    const { getUserProfileUrl: getUserProfileUrlProps } = this.props;

    // Check if unique profileUrl
    getUserProfileUrlProps(value);
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
    const { userProfile, loading, isUniqueProfileUrl } = this.props;
    const { editActive, validProfileUrl } = this.state;
    return (
      <div id="editBox">
        <div className="row">
          <div className="col-7 inputDiv d-flex justify-content-center align-items-center">
            <ThemeProvider theme={theme}>
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={EditInstructions}
              >
                <TextField
                  multiline
                  id="editInput"
                  onChange={this.onProfileUrlChange}
                  style={{
                    backgroundColor: editActive ? "#075255" : "transparent",
                  }}
                  type="text"
                  defaultValue={userProfile.profileUrl}
                  disabled={!editActive}
                />
              </OverlayTrigger>
            </ThemeProvider>
          </div>
          <div className="col-2 justify-content-center">
            {editActive ? (
              <Verifying
                loading={loading}
                isUniqueProfileUrl={isUniqueProfileUrl}
                validProfileUrl={validProfileUrl}
              />
            ) : null}
          </div>
          <div className="col-2 d-flex justify-content-center text-center">
            <OverlayTrigger
              key="top"
              placement="top"
              overlay={
                <Tooltip>
                  {editActive ? (
                    validProfileUrl ? (
                      <div>Click to Save</div>
                    ) : (
                      <div>Invalid Profile Url</div>
                    )
                  ) : (
                    <div>Click to Edit Profile Url</div>
                  )}
                </Tooltip>
              }
            >
              <IconButton
                id="editBtn"
                onClick={
                  validProfileUrl
                    ? editActive
                      ? this.onProfileUrlSubmit
                      : this.toggleEditActive
                    : null
                }
                disabled={!validProfileUrl}
              >
                {editActive ? (
                  validProfileUrl ? (
                    <SaveIcon id="editSaveIcon" />
                  ) : (
                    <BlockIcon className="editIcon" />
                  )
                ) : (
                  <CreateIcon className="editIcon" />
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

const Verifying = (props) => {
  const { loading, isUniqueProfileUrl, validProfileUrl } = props;
  if (loading) {
    return (
      <div className="vertical-center">
        <Spinner animation="border" variant="secondary" />
      </div>
    );
  }
  return (
    <div className="text-center">
      {validProfileUrl ? (
        isUniqueProfileUrl ? (
          <CheckIcon className="valid-icon vertical-center" />
        ) : (
          <ClearIcon className="invalid-icon vertical-center" />
        )
      ) : null}
    </div>
  );
};

const EditInstructions = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">
      {"dogetherapp.herokuapp.com\n/user/"}
      <strong>customurl</strong>
    </Popover.Title>
    <Popover.Content>
      Your custom profile URL must contain 3-100 letters or numbers. Please do
      not use spaces, symbols, or special characters.
    </Popover.Content>
  </Popover>
);

// state has entire state of app!!
const mapStateToProps = (state) => {
  return {
    currUser: state.currentUserID,
    userProfile: state.userProfileDB,
    loading: state.visitedProfile.loading,
    isUniqueProfileUrl:
      Object.keys(state.visitedProfile.user).length === 0 ||
      state.visitedProfile.user.profileUrl === state.userProfileDB.profileUrl,
  };
};

const mapDispatchToProps = {
  updateProfileUrlDB,
  getUserProfileUrl,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileUrlEdit);
