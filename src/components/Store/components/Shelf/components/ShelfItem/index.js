import * as React from "react";
import "../../../../../../App.scss";
import "../../../../Store.css";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import CheckoutModal from "./components/CheckoutModal";

class ShelfItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      alreadyOwned: false,
    };
  }

  componentDidMount() {
    const { ownedBadges, badge } = this.props;
    ownedBadges.forEach((item) => {
      if (item.badge === badge) {
        this.setState({
          alreadyOwned: true,
        });
      }
    });
  }

  setModalShow = (bool) => {
    this.setState({
      modalShow: bool,
    });
  };

  render() {
    const { modalShow, alreadyOwned } = this.state;
    const { badge, cost, descriptor, rank, color } = this.props;
    const classString = "material-icons storeItem ".concat(badge);
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
              <div className="rankTextDiv">
                <h5 className="rankText">{rank}</h5>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="row">
            <div className="col d-flex justify-content-start align-items-center">
              <div className="descTextDiv">
                <h6 className="descText">{descriptor}</h6>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="row">
            <div className="col d-flex justify-content-center align-items-center">
              <div className="costTextDiv">
                <h4 className="costText">{cost}</h4>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="text-center purchaseButtonDiv">
            <Button
              className="general-button-color purchaseButton"
              onClick={() => this.setModalShow(true)}
              disabled={alreadyOwned}
            >
              {alreadyOwned ? "Owned" : "Purchase"}
            </Button>
          </div>
          <div>
            <CheckoutModal
              badge={badge}
              cost={cost}
              rank={rank}
              color={color}
              show={modalShow}
              alreadyOwned={alreadyOwned}
              onHide={() => this.setModalShow(false)}
            />
          </div>
        </td>
      </tr>
    );
  }
}

// state has entire state of app!!
const mapStateToProps = (state) => {
  return {
    currUser: state.currentUserID,
    ownedBadges: state.userProfileDB.badges,
  };
};

export default connect(mapStateToProps)(ShelfItem);
