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
              <h1>Your Profile</h1>
            </div>
          </div>

          <div className="row">

            <div className="col-3 d-flex justify-content-center">
              <div className="row">
                <div className={"col"}>
                  <span>
                  <Avatar />
                  <br />
                  <UserDescription />
                  </span>
                </div>
              </div>
            </div>

            <div className="col-9 acomp bg-light text-dark">
              <div className={"row"}>
                <div className={"col d-flex justify-content-center"}>
                  <h3>Your Accomplishments</h3>
                </div>
              </div>
              <div className={"row"}>
                <div className={"col"}>
                  <Accomplishments mangosRec={user.mangosReceived}
                                   clapsRec={user.clapsReceived}
                                   tasksComp={user.numTasksCompleted} />
                </div>
              </div>
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
