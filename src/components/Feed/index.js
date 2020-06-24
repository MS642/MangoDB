import * as React from "react";
import "./Feed.scss";
import "./Feed.css";

import TaskUnit from "./components/TaskUnit/index";

class Feed extends React.Component {
  render() {
    return (
      <div>
        <div className="container TaskFeed bg-dark text-white">
          <br />
          <div className={"row"}>
            <div className={"col-12 d-flex justify-content-center align-items-center"}>
              <h1>Hot Off The Press</h1>
            </div>
          </div>
          <br />
          <div className={"row"}>
            <div className={"col-12 d-flex justify-content-center"}>
              <TaskUnit />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feed;
