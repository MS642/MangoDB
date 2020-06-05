import * as React from "react";
import '../../App.css';
import '../../App.scss';
import './Feed.scss';
import './Feed.css';

import TaskUnit from "./components/TaskUnit";

class Feed extends React.Component {
    render() {
        return (
            <div className={"container TaskFeedHeader"}>
                <h1>Global Task Feed</h1>
                <TaskUnit />
            </div>
        );
    }
}

export default Feed;