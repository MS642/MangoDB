import * as React from "react";
import { connect } from "react-redux";
import CompletedTask from "./components/CompletedTask/index";
import SocialUnit from "./components/SocialUnit/index";
import { fetchFeedTasks } from "../../../../actions/feedActions";

class TaskUnit extends React.Component {

  componentDidMount() {
    this.props.fetchFeedTasks();
  };

  render() {
    const { feedTasks, feedTasksDB } = this.props;
    console.log("feedDB:", feedTasksDB);
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
  return {
    feedTasks: state.feed.feedTasks,
    feedTasksDB: state.feedDB.tasks,
    users: state.userProfileDB
  };
};

export default connect(mapStateToProps, {fetchFeedTasks})(TaskUnit);
