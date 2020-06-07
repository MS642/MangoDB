import * as React from "react";
import "../../App.css";
import "../../App.scss";
import "./Feed.scss";
import "./Feed.css";

import TaskUnit from "./components/TaskUnit";

class Feed extends React.Component {
  state = {
    feedTasks: [
      {
        user: "Mangosteen Coconutbottom",
        avatarURL: "https://i.imgur.com/wAy6yQt.jpg",
        task: "Making a tinfoil hat to protect myself from 5G.",
        claps: 24,
        mangoBits: 999,
        timestamp: "December 31, 1999 23:59:59",
        id: 0,
      },
      {
        user: "Tiger Dude",
        avatarURL: "https://i.imgur.com/4Fng6Qx.jpg",
        task: "Buy some food for my pet tiger and sue Netflix",
        claps: 12,
        mangoBits: 346,
        timestamp: "March 5, 2020 12:00:00",
        id: 1,
      },
      {
        user: "Smidge Maisel",
        avatarURL: "https://i.imgur.com/S6zrL4Q.jpg",
        task: "Come up with 5 new jokes for my act",
        claps: 33,
        mangoBits: 666,
        timestamp: "May 10, 2020 11:32:17",
        id: 2,
      },
      {
        user: "Patrick Star",
        avatarURL: "https://i.imgur.com/18KrOIv.jpg",
        task: "Ummmm, wumbo?",
        claps: 5,
        mangoBits: 18,
        timestamp: "January 23, 2018 17:38:42",
        id: 3,
      },
    ],
  };

  render() {
    return (
      <div className="container TaskFeed">
        <h1>Global Task Feed</h1>
        <TaskUnit feedTasks={this.state.feedTasks} />
      </div>
    );
  }
}

export default Feed;
