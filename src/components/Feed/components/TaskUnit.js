import * as React from "react";
import '../../../App.css';
import '../../../App.scss';
import '../Task.scss';
import '../Task.css';
import CompletedTask from "./CompletedTask";
import SocialUnit from "./SocialUnit";
import CommentUnit from "./CommentUnit";


class TaskUnit extends React.Component {
    render() {
        return (
            <div className={"row justify-content-center TaskUnit"}>
                <div className={"col-6"}>
                    <CompletedTask />
                    <SocialUnit />
                    <CommentUnit />
                </div>
            </div>
        );
    }
}

export default TaskUnit;