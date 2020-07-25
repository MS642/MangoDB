import * as React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { connect } from "react-redux";
import { getMangoStalkAction } from "actions/profileActions";

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

  getUsersDetailss = () => {
    // get name and avatar
  };

  removeUser = () => {
    const { title } = this.props;
    if (title === "Following") {
      // go to followers of user_ID and remove self
    } else {
      // go to following of user_ID and remove self
    }
  };

  renderList = (users) => {
    // console.log(users);
    // const {userDB} = this.props;
    // console.log("================");
    // console.log(typeof userDB);
    // console.log(userDB);
    // console.log(Object.keys(userDB));
    // console.log(userDB.mangoStalk);
    // console.log(mangoStalk.mangoStalk.followers);
    // console.log(users);
    if (users) {
      return users.map((user) => {
        return (
          <div key={user._id} className="row bg-light">
            <div className="col-2 AvatarCol d-flex justify-content-center align-items-center">
              <img
                src={user.avatar}
                width="50px"
                height="50px"
                className="userAvatars"
                alt=""
              />
            </div>
            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-7 col-7 d-flex justify-content-start text-start">
              {" "}
              <strong>{user.username}</strong>
            </div>
            <br />
            <hr />
          </div>
        );
      });
    }
    return null;
  };

  render() {
    const { title, usersID, userDB, isFollowers } = this.props;
    const { open } = this.state;
    const buttonTag = `${usersID.length} ${title}`;
    let users = [];
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
      <div>
        <Button onClick={this.toggleModal}>{buttonTag}</Button>
        <Modal
          show={open}
          onHide={() => this.setState({ open: false })}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MangoStalkModal);
