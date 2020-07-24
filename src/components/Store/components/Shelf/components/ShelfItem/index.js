import * as React from "react";
import "../../../../../../App.scss";
import "../../../../Store.css";
import Button from "react-bootstrap/Button";

class ShelfItem extends React.Component {
  render() {
    const { badge, cost } = this.props;
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
            <div className="col d-flex justify-content-center align-items-center">
              <div className="costTextDiv">
                <h4>{cost}</h4>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="text-center">
            <Button className="purchaseButton">Purchase</Button>
          </div>
        </td>
      </tr>
    );
  }
}

export default ShelfItem;
