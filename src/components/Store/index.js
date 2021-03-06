import * as React from "react";
import "../../App.scss";
import "./Store.css";
import { connect } from "react-redux";
import Shelf from "./components/Shelf";

class MangoStore extends React.Component {
  render() {
    const { mangoWallet } = this.props;
    return (
      <div className="bg-dark text-white">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <h1 className="display-3 mangoStoreTitle">Mango Store</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-4" />
          <div className="col-4 d-flex justify-content-center bg-light black-text walletBox">
            <span>
              <h4 className="mangoWalletText">
                <strong>Your Mango Wallet: </strong>
                <span className="mangoWalletNum">{mangoWallet}</span>
              </h4>
            </span>
          </div>
          <div className="col-4" />
        </div>

        <div className="row">
          <div className="col-4" />
          <div className="col-4 d-flex justify-content-center">
            <div className="walletBtmTriangle"> </div>
          </div>
          <div className="col-4" />
        </div>

        <br />

        <div className="row">
          <div className="col-xl-2 col-lg-1 col-0" />
          <div className="col-xl-8 col-lg-10 col-md-12 col-sm-12 col-12 d-flex justify-content-center shelfContainer">
            <Shelf />
          </div>
          <div className="col-xl-2 col-lg-1 col-0" />
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

export default connect(mapStateToProps)(MangoStore);
