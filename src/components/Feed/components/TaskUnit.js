import * as React from "react";
import '../Feed.scss';
import '../Feed.css';
import CompletedTask from "./CompletedTask";
import SocialUnit from "./SocialUnit";
import AddComment from "./AddComment";
import CommentUnit from "./CommentUnit";


class TaskUnit extends React.Component {

    render() {
        const {feedTasks} = this.props;
        console.log("taskunit Props:", this.props.feedTasks);
        const taskFeedList = feedTasks.map(task => {
            return (
                <div className={"feedPad"}>
                    <div className={"row justify-content-center TaskUnit"}>
                        <div className={"col TaskCol"}>
                            <CompletedTask/>
                            <SocialUnit/>
                            <AddComment/>
                            <CommentUnit/>
                        </div>
                    </div>
                </div>
            )
        });
        return (
            <div className="taskListFeed">
                {taskFeedList}
            </div>
        );
    }
}

export default TaskUnit;