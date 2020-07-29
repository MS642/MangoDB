import * as React from "react";
import "./UserProfile.css";
import { connect } from "react-redux";
import { getUserProfileUrl } from "actions/users";
import { Button } from "react-bootstrap";
import ProfileFeed from "components/UserProfile/components/ProfileFeed";
import ProfileUrlEdit from "components/UserProfile/components/ProfileUrlEdit";
import InvalidUser from "components/UserProfile/components/InvalidUser";
import LoadingUser from "components/UserProfile/components/LoadingUser";
import Avatar from "./components/Avatar";
import UserDescription from "./components/NameEdit";
import Accomplishments from "./components/Accomplishments";
import MangoStalk from "./components/MangoStalk";

class UserProfile extends React.Component {
  componentDidMount() {
    const { profileUrl, getUserProfileUrl: fetchUserProfileUrl } = this.props;
    fetchUserProfileUrl(profileUrl);
  }

  componentDidUpdate(prevProps) {
    const { profileUrl } = this.props;
    if (profileUrl !== prevProps.profileUrl) {
      this.forceUpdate();
    }
  }

  isCurrentUserProfile = () => {
    const { userProfile, profileUrl } = this.props;
    return userProfile.profileUrl === profileUrl;
  };

  render() {
    const {
      profileUrl,
      userProfile,
      visitedProfileLoading,
      visitedProfile,
    } = this.props;
    const isCurrentUserProfile = this.isCurrentUserProfile();

    // Loading bar until the visitedProfile is loading and it is not the userProfile
    if (visitedProfileLoading && profileUrl !== userProfile.profileUrl) {
      return <LoadingUser />;
    }

    // If profileUrl is not valid, the query to DB will return an empty visitedProfile object
    if (
      !visitedProfileLoading &&
      Object.keys(visitedProfile).length === 0 &&
      !isCurrentUserProfile
    ) {
      return <InvalidUser />;
    }

    return (
      <div>
        <div className="container bg-dark text-white">
          <div className="row">
            <div className="col-4 justify-content-center">
              <AvatarComponent
                isCurrentUser={isCurrentUserProfile}
                userProfile={userProfile}
                visitedProfile={visitedProfile}
              />
            </div>
            <div className="col-8 justify-content-center">
              <div className="row">
                <div className="col-8">
                  <h1 className="display-3">
                    {isCurrentUserProfile
                      ? userProfile.username
                      : visitedProfile.username}
                  </h1>
                </div>
                <div className="col-4">
                  <FollowButton isCurrentUser={isCurrentUserProfile} />
                </div>
              </div>

              <br />

              <InfoList
                isCurrentUser={isCurrentUserProfile}
                userProfile={userProfile}
                visitedProfile={visitedProfile}
              />
            </div>
          </div>

          <br />
          <div className="row profile">
            <AccomplishmentsComponent
              isCurrentUser={isCurrentUserProfile}
              userProfile={userProfile}
            />
          </div>
          <div className="row">
            <div className="col-12 justify-content-center">
              <ProfileFeed />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const AvatarComponent = (props) => {
  const { isCurrentUser, userProfile, visitedProfile } = props;

  const profile = isCurrentUser ? userProfile : visitedProfile;
  return (
    <div className="row">
      <div className="col">
        <span>
          <Avatar profileImage={profile.avatar} visiting={isCurrentUser} />
          <br />
          {isCurrentUser ? <UserDescription /> : null}
          <br />
          {isCurrentUser ? <ProfileUrlEdit /> : null}
        </span>
      </div>
    </div>
  );
};

const FollowButton = (props) => {
  const { isCurrentUser } = props;

  if (!isCurrentUser) {
    return <Button className="btn-light follow-button">Follow</Button>;
  }
  return null;
};

const InfoList = (props) => {
  const { isCurrentUser, userProfile, visitedProfile } = props;

  const profile = isCurrentUser ? userProfile : visitedProfile;
  return (
    <div className="row">
      <div className="col-3">
        <strong>{profile.totalMangosEarned}</strong> mangos
      </div>
      <div className="col-3">
        <strong>{profile.tasksCompleted}</strong> tasks
      </div>
      <div className="col-3">
        <strong>{profile.followers.length}</strong>{" "}
        {isCurrentUser ? (
          <MangoStalk
            user={profile}
            followers={profile.followers}
            following={profile.following}
            isFollowers
          />
        ) : (
          "followers"
        )}
      </div>
      <div className="col-3">
        <strong>{profile.following.length}</strong>{" "}
        {isCurrentUser ? (
          <MangoStalk
            user={profile}
            followers={profile.followers}
            following={profile.following}
            isFollowers={false}
          />
        ) : (
          "following"
        )}
      </div>
    </div>
  );
};

const AccomplishmentsComponent = (props) => {
  const { isCurrentUser, userProfile } = props;

  if (isCurrentUser) {
    return (
      <div className="col-12 acomp bg-light text-dark">
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
    visitedProfileLoading: state.visitedProfile.loading,
    visitedProfile: state.visitedProfile.user,
  };
};

const mapDispatchToProps = {
  getUserProfileUrl,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
