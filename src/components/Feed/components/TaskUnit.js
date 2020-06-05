import * as React from "react";
import '../../../App.css';
import '../../../App.scss';
import '../Task.scss';
import CompletedTask from "./CompletedTask";
import SocialUnit from "./SocialUnit";
import CommentUnit from "./CommentUnit";


class TaskUnit extends React.Component {
    render() {
        return (
            <div className={"container TaskUnit"}>
            <CompletedTask />
            <SocialUnit />
            <CommentUnit />
            </div>
        );
    }
}

export default TaskUnit;