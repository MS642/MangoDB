import * as React from "react";
import { connect } from "react-redux";

import "../../navbar.css";
import "./navbarprofile.css";

const NavBarProfile = (props) => {
  const { userProfile } = props;
  return (
    <div className="navbar-item">
      <button type="button" className="navbar-button">
        <img
          className="navbar-profile"
          src={userProfile.avatar}
          alt="profile navbar icon"
        />
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userProfile: state.userProfileDB,
  };
};

export default connect(mapStateToProps)(NavBarProfile);
