import * as React from "react";
import { connect } from "react-redux";
import CompletedTask from "./components/CompletedTask/index";
import SocialUnit from "./components/SocialUnit/index";

class TaskUnit extends React.Component {
  render() {
    const { feedTasksDB } = this.props;
    const taskFeedList = feedTasksDB.map((taskF) => {
      const {
        _id,
        description,
        timestamp,
        clapsReceived,
        givenClaps,
        mangosReceived,
        userDetails,
        user_id,
        isDone,
      } = taskF;
      const { avatar, username } = userDetails[0];
      return (
        <div key={_id} className="feedPad">
          <div className="row justify-content-center TaskUnit bg-light text-dark">
            <div className="col TaskCol">
              <div>
                <CompletedTask
                  avatar={avatar}
                  name={username}
                  taskMessage={description}
                  date={timestamp}
                  isDone={isDone}
                />
                <SocialUnit
                  taskID={_id}
                  taskUserID={user_id}
                  name={username}
                  clapNum={clapsReceived}
                  givenClap={givenClaps}
                  mangoNum={mangosReceived}
                  isDone={isDone}
                />
              </div>
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
    feedTasksDB: state.feedDB.tasks,
  };
};

export default connect(mapStateToProps)(TaskUnit);
