import * as React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../../MangoStalk.css";

class UnfollowModal extends React.Component {
  constructor() {
    super();
    this.state = {
      openUnfollow: false,
    };
  }

  render() {
    const { openUnfollow } = this.state;
    const { user, unfollow } = this.props;
    return (
      <div>
        <button
          className="following"
          type="button"
          onClick={() => {
            this.setState((prevState) => ({
              openUnfollow: !prevState.openUnfollow,
            }));
          }}
        >
          {" "}
          Following{" "}
        </button>

        <Modal
          show={openUnfollow}
          onHide={() => this.setState({ openUnfollow: false })}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body>
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <img
                  src={user.avatar}
                  width="40px"
                  height="40px"
                  className="userAvatars"
                  alt=""
                />
              </div>
              <br />
              <div className="row justify-content-center align-items-center">
                Unfollow @{user.username} ?
              </div>
            </div>
            <hr />
            <div className="container ">
              <div className="row justify-content-center align-items-center">
                <Button
                  onClick={() => {
                    this.setState({ openUnfollow: false });
                    unfollow(user._id);
                  }}
                  className="mt-3 py-1 unfollow-button"
                >
                  Unfollow
                </Button>
              </div>
              <div className="row justify-content-center align-items-center" />
            </div>
          </Modal.Body>
          <Modal.Footer className="py-1">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <Button
                  variant="secondary"
                  onClick={() => this.setState({ openUnfollow: false })}
                  className="mt-1 unfollow-cancel-button"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default UnfollowModal;
