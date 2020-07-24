import * as React from "react";
import Modal from "react-bootstrap/Modal";
import { connect } from "react-redux";
import "../../../../../../Store.css";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

class CheckoutModal extends React.Component {
  render() {
    const { show, onHide, badge, cost, rank } = this.props;
    const classString = "material-icons checkoutItem ".concat(badge);
    return (
      <div>
        <Modal
          onHide={onHide}
          size="lg"
          show={show}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title>Checkout</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col d-flex justify-content-center">
                <h5>Disclaimer</h5>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex justify-content-center">
                <p>
                  Purchasing this badge will replace the badge currently
                  displayed on your public tasks.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex justify-content-center">
                <h4>Your Cart</h4>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex justify-content-center">
                <Table bordered hover>
                  <thead>
                    <tr>
                      <th className="text-center">
                        <h6>Badge</h6>
                      </th>
                      <th className="text-center">
                        <h6>Rank</h6>
                      </th>
                      <th className="text-center">
                        <h6>Cost (Mangos)</h6>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="d-flex justify-content-center">
                        <div>
                          <i className={classString}>{badge}</i>
                        </div>
                      </td>
                      <td>
                        <div className="row">
                          <div className="col d-flex justify-content-start align-items-center">
                            <div className="descTextDivCheckout">
                              <h5>{rank}</h5>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="row">
                          <div className="col d-flex justify-content-center align-items-center">
                            <div className="costTextDivCheckout">
                              <h4>{cost}</h4>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
            <div className="row">
              <div className="col-7" />
              <div className="col-5 d-flex justify-content-end">
                <h6>Total Purchase Price: {cost}</h6>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex justify-content-end">
                <Button>Confirm Purchase</Button>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={onHide}>Cancel</Button>
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
