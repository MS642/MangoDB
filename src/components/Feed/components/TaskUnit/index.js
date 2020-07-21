import * as React from "react";
import { connect } from "react-redux";
import { fetchFeedTasks } from "actions/feedActions";
import CompletedTask from "./components/CompletedTask/index";
import SocialUnit from "./components/SocialUnit/index";

class TaskUnit extends React.Component {
  componentDidMount() {
    const { fetchFeedTasks: fetchFeed, feedLoading } = this.props;
    fetchFeed();
    this.interval = setInterval(() => {
      if (!feedLoading) {
        fetchFeed();
      }
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

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
      } = taskF;
      const { avatar, username } = userDetails[0];
      return (
        <div key={_id} className="feedPad">
          <div className="row justify-content-center TaskUnit bg-light text-dark">
            <div className="col TaskCol">
              <CompletedTask
                avatar={avatar}
                name={username}
                taskMessage={description}
                date={timestamp}
              />
              <SocialUnit
                taskID={_id}
                taskUserID={user_id}
                name={username}
                clapNum={clapsReceived}
                givenClap={givenClaps}
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
    feedTasksDB: state.feedDB.tasks,
    feedLoading: state.feedDB.loading,
  };
};

export default connect(mapStateToProps, { fetchFeedTasks })(TaskUnit);
