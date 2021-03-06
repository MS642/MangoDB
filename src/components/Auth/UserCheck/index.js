import * as React from "react";
import { connect } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import { getUserAuth } from "actions/users";
import { LOGGED_IN_STATE, setUserLoggedState } from "services/LoggedInHelper";

class UserCheck extends React.Component {
  componentDidMount() {
    const { getUserAuth: getUserAuthProps, authUser } = this.props;
    getUserAuthProps(authUser);
  }

  componentDidUpdate() {
    const { callback, setIsGuest } = this.props;

    if (this.getUserLoaded()) {
      setUserLoggedState(LOGGED_IN_STATE.LOGGED_IN);
      setIsGuest(false);
      callback();
    }
  }

  getUserLoaded = () => {
    const { currentUserID } = this.props;

    return currentUserID !== "";
  };

  render() {
    return (
      <div className="bg-dark">
        <div className="row">
          <br />
          <br />
          <br />
          <br />
          <div className="col d-flex bg-dark justify-content-center align-items-center text-light">
            <h1>
              {this.getUserLoaded()
                ? "Loading App..."
                : "Your user info is being fetched. Please wait..."}
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex bg-dark justify-content-center align-items-center">
            {this.getUserLoaded() ? (
              <i
                className="material-icons"
                style={{ color: "green", fontSize: "300px" }}
              >
                done_outline
              </i>
            ) : (
              <Spinner animation="border" variant="secondary" />
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUserID: state.currentUserID,
  };
};

const mapDispatchToProps = {
  getUserAuth,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserCheck);
