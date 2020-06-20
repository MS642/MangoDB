import * as React from "react";
import "../Feed.scss";
import "../Feed.css";
import { connect } from "react-redux";
import CompletedTask from "./CompletedTask";
import SocialUnit from "./SocialUnit";

class TaskUnit extends React.Component {
  render() {
    const { feedTasks } = this.props;
    const taskFeedList = feedTasks.map((taskF) => {
      const { user, avatarURL, task, claps, mangoBits, timestamp, taskID } = taskF;
      return (
        <div key={taskID} className="feedPad">
          <div className="row justify-content-center TaskUnit bg-light text-dark">
            <div className="col TaskCol">
              <CompletedTask
                avatar={avatarURL}
                name={user}
                taskMessage={task}
                date={timestamp}
              />
              <SocialUnit
                taskID={taskID}
                name={user}
                clapNum={claps}
                mangoNum={mangoBits}
              />
            </div>
          </div>
        </div>
      );
    });
    return <div className="taskListFeed">{taskFeedList}</div>;
  }
}

// state has entire state of app!!
const mapStateToProps = (state) => {
  return { feedTasks: state.feed.feedTasks };
};

export default connect(mapStateToProps)(TaskUnit);
