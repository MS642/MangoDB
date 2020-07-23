import * as React from "react";
import "../../../../App.scss";
import "../../Store.css";
import { connect } from "react-redux";

class Shelf extends React.Component {
  render() {
    return (
      <div>
        <div className="row bg-light shopBox">
          <div className="col">
            <div>
              <i className="material-icons verified">verified</i>
            </div>
            <div>
              <i className="material-icons verified">verified</i>
            </div>
            <div>
              <i className="material-icons verified">verified</i>
            </div>
            <div>
              <i className="material-icons verified">verified</i>
            </div>
            <div>
              <i className="material-icons verified">verified</i>
            </div>
            <div>
              <i className="material-icons verified">verified</i>
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
