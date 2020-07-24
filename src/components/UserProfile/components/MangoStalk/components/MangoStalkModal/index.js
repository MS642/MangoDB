import * as React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class MangoStalkModal extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  toggleModal = () => {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  };

  render() {
    const { title, users } = this.props;
    const { open } = this.state;
    const buttonTag = `${users.length} ${title}`;
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

export default MangoStalkModal;
