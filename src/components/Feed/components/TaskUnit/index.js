import * as React from "react";
import { connect } from "react-redux";
import { fetchFeedTasks, fetchFollowingFeed } from "actions/feedActions";
import CompletedTask from "./components/CompletedTask/index";
import SocialUnit from "./components/SocialUnit/index";

class TaskUnit extends React.Component {
  componentDidMount() {
    /* const {
      fetchFeedTasks: fetchFeed,
      fetchFollowingFeed: fetchFollowing,
      feedLoading,
      isGlobal,
      following,
    } = this.props; */
    this.handleFeedType();
    /* this.interval = setInterval(() => {
      if (!feedLoading) {
        if (isGlobal) {
          fetchFeed();
        } else {
          fetchFollowing(following);
        }
      }
    }, 5000); */
  }

  /* componentWillUnmount() {
    clearInterval(this.interval);
  } */

  handleFeedType() {
    const {
      fetchFeedTasks: fetchFeed,
      fetchFollowingFeed: fetchFollowing,
      isGlobal,
      following,
    } = this.props;
    if (isGlobal) {
      fetchFeed();
    } else {
      fetchFollowing(following);
    }
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
    following: state.userProfileDB.following,
  };
};

export default connect(mapStateToProps, { fetchFeedTasks, fetchFollowingFeed })(
  TaskUnit
);
