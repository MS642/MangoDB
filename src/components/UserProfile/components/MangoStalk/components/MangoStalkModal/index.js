import * as React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { connect } from "react-redux";
import {
  getMangoStalkAction,
  followAction,
  unfollowAction,
} from "actions/profileActions";
import "../../MangoStalk.css";

class MangoStalkModal extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  componentDidMount() {
    const { usersID, isFollowers, getMangoStalk } = this.props;
    getMangoStalk(usersID, isFollowers);
  }

  toggleModal = () => {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  };

  unfollow = (userID) => {
    const { unFollowUser, profile } = this.props;
    unFollowUser(profile, userID);
  };

  follow = (userID) => {
    const { followUser, profile } = this.props;
    followUser(profile, userID);
  };

  followingUser = (userID) => {
    const { profile } = this.props;
    return profile.following.includes(userID);
  };

  renderList = (users) => {
    if (users) {
      return users.map((user) => {
        return (
          <div key={user._id} className="row mt-2">
            <div className="col-2 AvatarCol d-flex justify-content-center align-items-center">
              <img
                src={user.avatar}
                width="40px"
                height="40px"
                className="userAvatars"
                alt=""
              />
            </div>
            <div className="col-xl-7 col-lg-9 col-md-9 col-sm-7 col-7 d-flex justify-content-start align-items-center">
              {" "}
              <strong>{user.username}</strong>
            </div>
            {this.followingUser(user._id) ? (
              <button
                className="following"
                type="button"
                onClick={() => {
                  this.unfollow(user._id);
                }}
              >
                {" "}
                Following{" "}
              </button>
            ) : (
              <button
                className="follow"
                type="button"
                onClick={() => {
                  this.follow(user._id);
                }}
              >
                {" "}
                Follow{" "}
              </button>
            )}
            <div className="row mt-2">
              <br />
              <hr />
            </div>
          </div>
        );
      });
    }
    return null;
  };

  render() {
    const { userDB, isFollowers } = this.props;
    const { open } = this.state;
    let users = [];
    const title = isFollowers ? "followers" : "following";
    if (userDB) {
      if (userDB.mangoStalk) {
        if (isFollowers) {
          users = userDB.mangoStalk.followers;
        } else {
          users = userDB.mangoStalk.following;
        }
      }
    }

    return (
      <div style={{ cursor: "pointer", display: "inline" }}>
        <button className="clickable" onClick={this.toggleModal} type="button">
          {title}
        </button>
        <Modal
          show={open}
          onHide={() => this.setState({ open: false })}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>
              {" "}
              {isFollowers ? "Followers" : "Following"}{" "}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container CompletedTask">
              {this.renderList(users)}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => this.setState({ open: false })}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userDB: state.userProfileDB,
    mangoStalk: state.userProfileDB.mangoStalk,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMangoStalk: (usersID, isFollowers) =>
      dispatch(getMangoStalkAction(usersID, isFollowers)),
    followUser: (profile, userID) => dispatch(followAction(profile, userID)),
    unFollowUser: (profile, userID) =>
      dispatch(unfollowAction(profile, userID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MangoStalkModal);
