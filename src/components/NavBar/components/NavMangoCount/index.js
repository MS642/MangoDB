import * as React from "react";
import { connect } from "react-redux";

import "./navmangocount.scss";
import { countPrettify } from "services/CountPrettify";

const NavMangoCount = ({ userProfile }) => {
  const { mangoCount } = userProfile;
  const LOGO_URL = `${process.env.PUBLIC_URL}/potato_mango.png`;
  return (
    <div className="navMangoCount">
      <img className="mangoIcon" src={LOGO_URL} alt="" />
      <div className="text-secondary font-weight-bold nav-mango-count-text">
        {countPrettify(mangoCount)}
      </div>
    </div>
  );
};

const mapStateToProps = ({ userProfileDB }) => {
  return { userProfile: userProfileDB };
};

export default connect(mapStateToProps)(NavMangoCount);
