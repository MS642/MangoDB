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
      <div className="container">
        <div className="row bg-light shopBox">
          <div className="col">
            <div className="row">
              <div className="col-2" />
              <div className="col-8 d-flex justify-content-center">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Badge</th>
                      <th>Cost</th>
                    </tr>
                  </thead>
                  <tbody>{badgeList}</tbody>
                </Table>
              </div>
              <div className="col-2" />
            </div>

            <div>
              <i className="material-icons storeItem verified">verified</i>
            </div>
            <div>
              <i className="material-icons storeItem pets">pets</i>
            </div>
            <div>
              <i className="material-icons storeItem grade">grade</i>
            </div>
            <div>
              <i className="material-icons storeItem local_fire_department">
                local_fire_department
              </i>
            </div>
            <div>
              <i className="material-icons storeItem free_breakfast">
                free_breakfast
              </i>
            </div>
            <div>
              <i className="material-icons storeItem military_tech">
                military_tech
              </i>
            </div>
            <div>
              <i className="material-icons storeItem emoji_events">
                emoji_events
              </i>
            </div>
            <div>
              <i className="material-icons storeItem cake">cake</i>
            </div>
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
