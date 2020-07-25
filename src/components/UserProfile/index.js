import * as React from "react";
import "./UserProfile.css";
import { connect } from "react-redux";
import { getUserProfileUrl } from "actions/users";
import Avatar from "./components/Avatar";
import UserDescription from "./components/Description";
import Accomplishments from "./components/Accomplishments";

class UserProfile extends React.Component {
  componentDidMount() {
    const { profileUrl, getUserProfileUrl: fetchUserProfileUrl } = this.props;
    fetchUserProfileUrl(profileUrl);
  }

  isCurrentUserProfile = () => {
    const { userProfile, profileUrl } = this.props;
    return userProfile.profileUrl === profileUrl;
  };

  render() {
    const { userProfile, visitedProfile } = this.props;
    const isCurrentUserProfile = this.isCurrentUserProfile();
    return (
      <div>
        <div className="container bg-dark text-white">
          <div className="row">
            <div className="col d-flex justify-content-center">
              <h1 className="display-3">
                {isCurrentUserProfile
                  ? "Your Profile"
                  : visitedProfile.username}
              </h1>
            </div>
          </div>

          <div className="row profile">
            <AvatarComponent
              isCurrentUser={isCurrentUserProfile}
              userProfile={userProfile}
              visitedProfile={visitedProfile}
            />

            <AccomplishmentsComponent
              isCurrentUser={isCurrentUserProfile}
              userProfile={userProfile}
            />
          </div>
        </div>
      </div>
    );
  }
}

const AvatarComponent = (props) => {
  const { isCurrentUser, userProfile, visitedProfile } = props;

  if (isCurrentUser) {
    return (
      <div className="col-3 d-flex justify-content-center">
        <div className="row">
          <div className="col">
            <span>
              <Avatar profileImage={userProfile.avatar} />
              <br />
              <UserDescription name={userProfile.username} />
            </span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="col-3 d-flex justify-content-center">
      <div className="row">
        <div className="col">
          <span>
            <Avatar profileImage={visitedProfile.avatar} />
          </span>
        </div>
      </div>
    </div>
  );
};

const AccomplishmentsComponent = (props) => {
  const { isCurrentUser, userProfile } = props;

  if (isCurrentUser) {
    return (
      <div className="col-9 acomp bg-light text-dark">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <h3>Your Accomplishments</h3>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Accomplishments
              mangosRec={userProfile.totalMangosEarned}
              clapsRec={userProfile.totalClapsEarned}
              tasksComp={userProfile.tasksCompleted}
            />
          </div>
        </div>
      </div>
    );
  }
  return null;
};

const mapStateToProps = (state) => {
  return {
    userProfile: state.userProfileDB,
    visitedProfile: state.visitedProfile,
  };
};

const mapDispatchToProps = {
  getUserProfileUrl,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
