import * as React from "react";
import "../../App.css";
import "../../App.scss";
import "./UserProfile.scss";
import "./UserProfile.css";

import Footer from "../Footer/Footer";
import UserDescription from "./components/Description";
import Avatar from "./components/Avatar";
import Accomplishments from "./components/Accomplishments";

class UserProfile extends React.Component {
  render() {
    return (
      <div>
        <div className="container bg-dark text-white">
          <div className="row">
            <div className="col d-flex justify-content-center">
              <h1>User Profile Page</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-3 d-flex justify-content-center">
              <div className="row">
                <span>
                  <Avatar />
                  <br />
                  <UserDescription />
                </span>
              </div>
              <div className="row" />
            </div>
            <div className="col-9">
              <Accomplishments />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default UserProfile;
