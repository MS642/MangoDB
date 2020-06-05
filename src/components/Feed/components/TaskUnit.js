import * as React from "react";
import '../Feed.scss';
import '../Feed.css';
import CompletedTask from "./CompletedTask";
import SocialUnit from "./SocialUnit";
import AddComment from "./AddComment";
import CommentUnit from "./CommentUnit";


class TaskUnit extends React.Component {
    render() {
        return (
            <div className={"row justify-content-center TaskUnit"}>
                <div className={"col-10"}>
                    <CompletedTask />
                    <SocialUnit />
                    <AddComment />
                    <CommentUnit />
                </div>
            </div>
        );
    }
}

export default TaskUnit;