import * as React from "react";
import { connect } from "react-redux";
import { sumMangos } from "services/mangoTransactions";
import CompletedTask from "./components/CompletedTask/index";
import SocialUnit from "./components/SocialUnit/index";

class TaskUnit extends React.Component {
  render() {
    const {
      feedTasksGlobal,
      isGlobal,
      feedTasksFollowing,
      currUser,
    } = this.props;
    let feed;
    if (isGlobal) {
      feed = feedTasksGlobal;
    } else {
      feed = feedTasksFollowing;
    }
    const taskFeedList = feed.map((taskF) => {
      const {
        _id,
        description,
        timestamp,
        givenClaps,
        mangoTransactions,
        userDetails,
        user_id,
        isDone,
      } = taskF;
      const { avatar, username, badges, profileUrl } = userDetails[0];
      let isCurrUser = false;
      if (currUser === user_id) {
        isCurrUser = true;
      }
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
                  badges={badges}
                  profileUrl={profileUrl}
                  isCurrUser={isCurrUser}
                />
                <SocialUnit
                  taskID={_id}
                  taskUserID={user_id}
                  name={username}
                  clapNum={givenClaps.length}
                  givenClap={givenClaps}
                  mangoNum={sumMangos(mangoTransactions)}
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
    feedTasksGlobal: state.feedDB.tasksGlobal,
    feedTasksFollowing: state.feedDB.tasksFollowing,
    currUser: state.currentUserID,
  };
};

export default connect(mapStateToProps)(TaskUnit);
