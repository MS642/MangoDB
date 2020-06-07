import * as React from "react";
import "../Feed.scss";
import "../Feed.css";
import CompletedTask from "./CompletedTask";
import SocialUnit from "./SocialUnit";
import AddComment from "./AddComment";
import CommentUnit from "./CommentUnit";

class TaskUnit extends React.Component {
  render() {
    const { feedTasks } = this.props;
    const taskFeedList = feedTasks.map((taskF) => {
      const { user, avatarURL, task, claps, mangoBits, timestamp, id } = taskF;
      return (
        <div key={id} className="feedPad">
          <div className="row justify-content-center TaskUnit">
            <div className="col TaskCol">
              <CompletedTask
                avatar={avatarURL}
                name={user}
                taskMessage={task}
                date={timestamp}
              />
              <SocialUnit clapNum={claps} mangoNum={mangoBits} userID={id} />
              <AddComment />
              <CommentUnit />
            </div>
          </div>
        </div>
      );
    });
    return <div className="taskListFeed">{taskFeedList}</div>;
  }
}

export default TaskUnit;
