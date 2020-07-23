import * as React from "react";
import "../../../../App.scss";
import "../../Store.css";
import { connect } from "react-redux";

class Shelf extends React.Component {
  render() {
    return <div />;
  }
}

// state has entire state of app!!
const mapStateToProps = (state) => {
  return {
    mangoWallet: state.userProfileDB.mangoCount,
  };
};

export default connect(mapStateToProps)(Shelf);
