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
              <i className="material-icons verified">pets</i>
            </div>
            <div>
              <i className="material-icons verified">android</i>
            </div>
            <div>
              <i className="material-icons verified">bug_report</i>
            </div>
            <div>
              <i className="material-icons verified">eco</i>
            </div>
            <div>
              <i className="material-icons verified">grade</i>
            </div>
            <div>
              <i className="material-icons verified">sentiment_satisfied_alt</i>
            </div>
            <div>
              <i className="material-icons verified">biotech</i>
            </div>
            <div>
              <i className="material-icons verified">weekend</i>
            </div>
            <div>
              <i className="material-icons verified">videogame_asset</i>
            </div>
            <div>
              <i className="material-icons verified">headset</i>
            </div>
            <div>
              <i className="material-icons verified">palette</i>
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
