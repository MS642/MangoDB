import * as React from "react";
import "../../App.css";
import "../../App.scss";
import "./Feed.scss";
import "./Feed.css";

import TaskUnit from "./components/TaskUnit";
import Footer from "../Footer/Footer";

class Feed extends React.Component {
  render() {
    return (
      <div>
        <div className="container TaskFeed bg-dark text-white">
          <br />
          <h1>What Your Friends Are Working On</h1>
          <br />
          <TaskUnit />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Feed;
