import * as React from "react";
import { connect } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import { getUserAuth } from "../../../actions";

class UserCheck extends React.Component {
  componentDidMount() {
    const { getUserAuth: getUserAuthProps, authUser } = this.props;
    getUserAuthProps(authUser);
  }

  componentDidUpdate() {
    const { callback, currentUser } = this.props;

    if (this.getUserLoaded(currentUser)) {
      callback();
    }
  }

  getUserLoaded = (currentUser) => {
    return Object.keys(currentUser).length !== 0;
  };

  render() {
    const { currentUser } = this.props;

    return (
      <div>
        <div className="row">
          <br />
          <br />
          <br />
          <br />
          <div className="col d-flex justify-content-center align-items-center text-light">
            <h1>
              {this.getUserLoaded(currentUser)
                ? "Loading App..."
                : "Your user info is being fetched. Please wait..."}
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center">
            {this.getUserLoaded(currentUser) ? (
              <p>TODO Check mark</p>
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
    currentUser: state.user,
  };
};

const mapDispatchToProps = {
  getUserAuth,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserCheck);
