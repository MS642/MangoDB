import * as React from "react";
import "../../../../App.scss";
import "../../Store.css";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";
import ShelfItem from "./components/ShelfItem";

class Shelf extends React.Component {
  render() {
    const badgeArray = [
      {
        name: "verified",
        cost: 10,
        color: "#0c8ac4",
        descriptor: "A humble badge of honor.",
      },
      {
        name: "pets",
        cost: 50,
        color: "saddlebrown",
        descriptor: "Display your appreciation of your furry friends.",
      },
      {
        name: "cake",
        cost: 100,
        color: "mediumpurple",
        descriptor: "When everyday is worth celebrating.",
      },
      {
        name: "free_breakfast",
        cost: 150,
        color: "darkslategrey",
        descriptor: "When DoGether is an addiction you just can't kick.",
      },
      {
        name: "grade",
        cost: 500,
        color: "gold",
        descriptor: "You're a superstar.",
      },
      {
        name: "local_fire_department",
        cost: 1000,
        color: "orangered",
        descriptor: "You're hotter than fire. Burn baby burn.",
      },
      {
        name: "military_tech",
        cost: 5000,
        color: "goldenrod",
        descriptor: "Become part of the high flier's club.",
      },
      {
        name: "emoji_events",
        cost: 50000,
        color: "darkgoldenrod",
        descriptor: "Congratulations champ, you've reached cloud nine.",
      },
    ];
    const badgeList = badgeArray.map((badge) => (
      <ShelfItem
        badge={badge.name}
        cost={badge.cost}
        descriptor={badge.descriptor}
      />
    ));
    return (
      <div className="col bg-light shopBox">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th className="text-center">
                    <h3>Badge</h3>
                  </th>
                  <th className="text-center">
                    <h3>Description</h3>
                  </th>
                  <th className="text-center">
                    <h3>Cost</h3>
                  </th>
                  <th className="text-center">
                    <h3>Redeem</h3>
                  </th>
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
