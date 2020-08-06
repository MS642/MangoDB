import * as React from "react";
import { connect } from "react-redux";
import { sumMangos } from "services/mangoTransactions";
import Spinner from "react-bootstrap/Spinner";
import CompletedTask from "./components/CompletedTask/index";
import SocialUnit from "./components/SocialUnit/index";

class TaskUnit extends React.Component {
  render() {
    const {
      feedTasksGlobal,
      isGlobal,
      feedTasksFollowing,
      currUser,
      initialLoad,
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
        completionTimestamp,
        startTimestamp,
      } = taskF;
      const { avatar, username, badges, profileUrl } = userDetails[0];
      let isCurrUser = false;
      if (currUser === user_id) {
        isCurrUser = true;
      }
      return (
        <div key={_id} className="feedPad">
          <div className="row justify-content-center TaskUnit bg-light black-text">
            <div className="col TaskCol">
              <div>
                <CompletedTask
                  avatar={avatar}
                  name={username}
                  taskMessage={description}
                  startTimestamp={startTimestamp}
                  isDone={isDone}
                  completionTimestamp={completionTimestamp}
                  lastUpdated={timestamp}
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
    if (initialLoad) {
      return (
        <div className="rows bg-dark">
          <div className="col loadingDiv">
            <div className="row">
              <div className="col d-flex justify-content-center">
                <h2>Loading...</h2>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex justify-content-center">
                <Spinner animation="grow" variant="secondary" />
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (taskFeedList.length === 0 && !isGlobal) {
      return (
        <div className="bg-dark">
          <div className="row">
            <div className="col d-flex justify-content-center">
              <h2>Sorry, there are no tasks to display!</h2>
            </div>
          </div>
          <div className="row">
            <div className="col d-flex justify-content-center">
              <h4>Tip: try following more people! :)</h4>
            </div>
          </div>
        </div>
      );
    }
    return <div className="taskListFeed">{taskFeedList}</div>;
  }
}

// state has entire state of app!!
const mapStateToProps = (state) => {
  return {
    feedTasksGlobal: state.feedDB.tasksGlobal,
    feedTasksFollowing: state.feedDB.tasksFollowing,
    currUser: state.currentUserID,
    initialLoad: state.feedDB.initialLoad,
  };
};

export default connect(mapStateToProps)(TaskUnit);
