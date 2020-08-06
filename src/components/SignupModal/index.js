import * as React from "react";
import Modal from "react-bootstrap/Modal";
import { LOGO_URL } from "assets/assets";
import { useAuth } from "react-use-auth";
import Button from "react-bootstrap/Button";

import "./signupmodal.css";

class SignupModal extends React.Component {
  render() {
    const { open, toggle } = this.props;
    return (
      <div>
        <Modal
          show={open}
          onHide={() => toggle()}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body style={{ backgroundColor: "#ffffff" }}>
            <br />
            <img
              className="rounded mx-auto d-block"
              style={{ height: "100px" }}
              src={LOGO_URL}
              alt=""
            />
            <br />
            <br />
            <h2 className="text-center">Don&apos;t miss more of your tasks</h2>
            <div className="container">
              <div className="row d-flex justify-items-center">
                <div className="col-12 text-center">
                  {" "}
                  People on DoGether are the first to finish their tasks.
                </div>
                <br />
                <br />
              </div>
              <br />
              <br />
              <div className="row d-flex justify-content-center">
                <LoginButton />
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

const LoginButton = () => {
  const { isAuthenticated, login } = useAuth();
  if (!isAuthenticated()) {
    return (
      <div className="col-12 d-flex justify-content-center">
        <Button className="btn-dark btn-lg letsStartButton" onClick={login}>
          Login / Register
        </Button>
      </div>
    );
  }
  return null;
};

export default SignupModal;
