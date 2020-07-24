import * as React from "react";
import "../../../../../../App.scss";
import "../../../../Store.css";

class ShelfItem extends React.Component {
  render() {
    const { badge, cost } = this.props;
    return (
      <tr>
        <td>
          <div>
            <i className="material-icons storeItem verified">{badge}</i>
          </div>
        </td>
        <td>{cost}</td>
      </tr>
    );
  }
}

export default ShelfItem;
