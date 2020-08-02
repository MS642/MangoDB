import * as React from "react";
import { connect } from "react-redux";

import { LOGO_URL } from "assets/assets";

import "./index.scss";

const NavMangoCount = ({ userProfile }) => {
  const { mangoCount } = userProfile;
  return (
    <div className="navbar-item navMangoCount">
      <div>
        <img className="mangoIcon" src={LOGO_URL} alt="" />
      </div>
      <div className="text-secondary font-weight-bold">{mangoCount}</div>
    </div>
  );
};

const mapStateToProps = ({ userProfileDB }) => {
  return { userProfile: userProfileDB };
};

export default connect(mapStateToProps)(NavMangoCount);
