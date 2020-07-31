import * as React from "react";
import "./UserProfile.css";
import { connect } from "react-redux";
import { getUserProfileUrl } from "actions/users";
import { Button } from "react-bootstrap";
import ProfileFeed from "components/UserProfile/components/ProfileFeed";
import ProfileUrlEdit from "components/UserProfile/components/ProfileUrlEdit";
import InvalidUser from "components/UserProfile/components/InvalidUser";
import LoadingUser from "components/UserProfile/components/LoadingUser";
import { followAction, unfollowAction } from "actions/profileActions";
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

  unfollow = (userID, userProfile) => {
    const { unFollowUser } = this.props;
    unFollowUser(userProfile, userID);
  };

  follow = (userID, userProfile) => {
    const { followUser } = this.props;
    followUser(userProfile, userID);
  };

  FollowButton = () => {
    const { userProfile, visitedProfile } = this.props;
    const isCurrentUserProfile = this.isCurrentUserProfile();
    if (!isCurrentUserProfile) {
      if (userProfile) {
        if (userProfile.following.includes(visitedProfile._id)) {
          return (
            <Button
              onClick={() => {
                this.unfollow(visitedProfile._id, userProfile);
              }}
              className="btn-light follow-button"
            >
              Following
            </Button>
          );
        }
        return (
          <Button
            onClick={() => {
              this.follow(visitedProfile._id, userProfile);
            }}
            className="btn-warning follow-button"
          >
            Follow
          </Button>
        );
      }
    }
    return null;
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
                  {this.FollowButton({ userProfile }, { visitedProfile })}
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

const mapDispatchToProps = (dispatch) => {
  return {
    getUserProfileUrl: (userURL) => dispatch(getUserProfileUrl(userURL)),
    followUser: (profile, userID) => dispatch(followAction(profile, userID)),
    unFollowUser: (profile, userID) =>
      dispatch(unfollowAction(profile, userID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
