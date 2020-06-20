import * as React from "react";
import "../../App.css";
import "../../App.scss";
import "./UserProfile.css";

import Footer from "../Footer/Footer";
import UserDescription from "./components/Description";
import Avatar from "./components/Avatar";
import Accomplishments from "./components/Accomplishments";
import { connect } from "react-redux";


class UserProfile extends React.Component {


  getUserProfile(targetProfile, allProfiles) {
    for (const profile of allProfiles) {
      if (profile.userID === targetProfile) {
        return profile;
      }
    }
  }


  render() {
    const { currUserProfiles, currUser } = this.props;
    const user = this.getUserProfile(currUser, currUserProfiles);
    return (
      <div>
        <div className="container bg-dark text-white">
          <div className="row">
            <div className="col d-flex justify-content-center">
              <h1>User Profile Page</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-3 d-flex justify-content-center">
              <div className="row">
                <span>
                  <Avatar />
                  <br />
                  <UserDescription />
                </span>
              </div>
              <div className="row" />
            </div>
            <div className="col-9">
              <Accomplishments />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

}


// state has entire state of app!!
const mapStateToProps = (state) => {
  console.log("UserProfile state:", state);
  return { currUserProfiles: state.userProfile.userProfiles,
    currUser: state.user.currentUserID};
};

export default connect(mapStateToProps)(UserProfile);
