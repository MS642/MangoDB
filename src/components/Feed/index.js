import * as React from "react";
import '../../App.css';
import '../../App.scss';
import './Feed.scss';
import './Feed.css';

import TaskUnit from "./components/TaskUnit";

class Feed extends React.Component {
    state = {
        feedTasks: [
            {user: "Mangosteen Coconutbottom", avatarURL: "https://i.ytimg.com/vi/dJmF1UCAkwc/maxresdefault.jpg",
                task: "Making a tinfoil hat to protect myself from 5G.", claps: 24, mangoBits: 999, timestamp: "December 31, 1999 23:59:59", id:0},
            {user: "Tiger Dude", avatarURL: "https://i.imgur.com/4Fng6Qx.jpg",
                task: "Buying pet food for my pet tiger.", claps: 12, mangoBits: 346, timestamp: "March 5, 2020 12:00:00", id:1}
        ]
    };
    render() {
        return (
            <div className={"container TaskFeed"}>
                <h1>Global Task Feed</h1>
                <TaskUnit feedTasks={this.state.feedTasks} />
            </div>
        );
    }
}

export default Feed;