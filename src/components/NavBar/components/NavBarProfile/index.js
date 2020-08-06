import * as React from "react";
import { connect } from "react-redux";

import "../../navbar.css";
import "./navbarprofile.css";

const NavBarProfile = (props) => {
  const { userProfile, currUser } = props;
  return (
    <div className="navbar-item">
      <button type="button" className="navbar-button">
        <img
          className="navbar-profile"
          src={currUser === "" ? "guest.png" : userProfile.avatar}
          alt="profile navbar icon"
        />
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userProfile: state.userProfileDB,
    currUser: state.currentUserID,
  };
};

export default connect(mapStateToProps)(NavBarProfile);
