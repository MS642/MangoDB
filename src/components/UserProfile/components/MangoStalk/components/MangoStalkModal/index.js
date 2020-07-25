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

  render() {
    const { title, usersID } = this.props;
    const { open } = this.state;
    const buttonTag = `${usersID.length} ${title}`;
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
            <div />
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
