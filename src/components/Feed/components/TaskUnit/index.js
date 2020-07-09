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
    const { feedTasksDB } = this.props;
    console.log("feedDB:", feedTasksDB);
    const taskFeedList = feedTasksDB.map((taskF) => {
      const { _id, title, timestamp, clapsReceived, mangosReceived, userDetails, user_id} = taskF;
      const {avatar, username } = userDetails[0];
      return (
        <div key={_id} className="feedPad">
          <div className="row justify-content-center TaskUnit bg-light text-dark">
            <div className="col TaskCol">
              <CompletedTask
                avatar={avatar}
                name={username}
                taskMessage={title}
                date={timestamp}
              />
              <SocialUnit
                taskID={_id}
                taskUserID={user_id}
                name={username}
                clapNum={clapsReceived}
                mangoNum={mangosReceived}
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
    feedTasksDB: state.feedDB.tasks
  };
};

export default connect(mapStateToProps, {fetchFeedTasks})(TaskUnit);
