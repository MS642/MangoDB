import * as React from "react";
import "../../../../../../App.scss";
import "../../../../Store.css";
import Button from "react-bootstrap/Button";
import CheckoutModal from "./components/CheckoutModal";

class ShelfItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
    };
  }

  setModalShow = (bool) => {
    this.setState({
      modalShow: bool,
    });
  };

  render() {
    const { modalShow } = this.state;
    const { badge, cost, descriptor } = this.props;
    const classString = "material-icons matIcon storeItem ".concat(badge);
    return (
      <tr>
        <td className="d-flex justify-content-center">
          <div>
            <i className={classString}>{badge}</i>
          </div>
        </td>
        <td>
          <div className="row">
            <div className="col d-flex justify-content-start align-items-center">
              <div className="descTextDiv">
                <h5>{descriptor}</h5>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="row">
            <div className="col d-flex justify-content-center align-items-center">
              <div className="costTextDiv">
                <h4>{cost}</h4>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="text-center">
            <Button
              className="purchaseButton"
              onClick={() => this.setModalShow(true)}
            >
              Purchase
            </Button>
          </div>
          <div>
            <CheckoutModal
              show={modalShow}
              onHide={() => this.setModalShow(false)}
            />
          </div>
        </td>
      </tr>
    );
  }
}

export default ShelfItem;
