import * as React from "react";
import Modal from "react-bootstrap/Modal";
import { connect } from "react-redux";
import "../../../../../../Store.css";
import Button from "react-bootstrap/Button";

class CheckoutModal extends React.Component {
  render() {
    const { show, onHide } = this.props;
    return (
      <div>
        <Modal
          onHide={onHide}
          size="lg"
          show={show}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Centered Modal</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

// state has entire state of app!!
const mapStateToProps = (state) => {
  return {
    currUser: state.currentUserID,
  };
};

export default connect(mapStateToProps)(CheckoutModal);
