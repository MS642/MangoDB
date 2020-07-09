import * as React from "react";
import "./UserProfile.css";
import Avatar from "./components/Avatar/";
import UserDescription from "./components/Description/";
import Accomplishments from "./components/Accomplishments/";
import { connect } from "react-redux";


class UserProfile extends React.Component {

  state = {
    userProfile: null
  };

  componentDidMount() {

  }


  render() {
    const { currUser } = this.props;
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
                  <Avatar profileImage={currUser.currentUserAvatar} />
                  <br />
                  <UserDescription name={currUser.currentUserName} />
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
                  <Accomplishments mangosRec={currUser.totalMangosEarned}
                                   clapsRec={currUser.totalClapsEarned}
                                   tasksComp={currUser.tasksCompleted} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

}


// state has entire state of app!!
const mapStateToProps = (state) => {
  console.log("UserProfile state:", state);
  return { currUser: state.user};
};

export default connect(mapStateToProps)(UserProfile);
