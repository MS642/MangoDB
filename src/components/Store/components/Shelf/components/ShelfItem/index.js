import * as React from "react";
import "../../../../../../App.scss";
import "../../../../Store.css";
import Button from "react-bootstrap/Button";

class ShelfItem extends React.Component {
  render() {
    const { badge, cost } = this.props;
    const classString = "material-icons storeItem ".concat(badge);
    return (
      <tr>
        <td>
          <div>
            <i className={classString}>{badge}</i>
          </div>
        </td>
        <td>{cost}</td>
        <td>
          <Button>Purchase</Button>
        </td>
      </tr>
    );
  }
}

export default ShelfItem;
