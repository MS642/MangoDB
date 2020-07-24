import * as React from "react";
import "../../../../App.scss";
import "../../Store.css";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";
import ShelfItem from "./components/ShelfItem";

class Shelf extends React.Component {
  render() {
    const badgeArray = [
      { name: "verified", cost: 10 },
      { name: "pets", cost: 50 },
      { name: "cake", cost: 100 },
      { name: "free_breakfast", cost: 150 },
      { name: "grade", cost: 500 },
      { name: "local_fire_department", cost: 1000 },
      { name: "military_tech", cost: 5000 },
      { name: "emoji_events", cost: 50000 },
    ];
    const badgeList = badgeArray.map((badge) => (
      <ShelfItem badge={badge.name} cost={badge.cost} />
    ));
    return (
      <div className="col bg-light shopBox">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Badge</th>
                  <th>Cost</th>
                  <th>Redeem</th>
                </tr>
              </thead>
              <tbody>{badgeList}</tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

// state has entire state of app!!
const mapStateToProps = (state) => {
  return {
    mangoWallet: state.userProfileDB.mangoCount,
  };
};

export default connect(mapStateToProps)(Shelf);
