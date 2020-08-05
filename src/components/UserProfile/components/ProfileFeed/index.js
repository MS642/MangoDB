import * as React from "react";
import { connect } from "react-redux";
import { sumMangos } from "services/mangoTransactions";
import { fetchUserCompletedTasks } from "actions/feedActions";

import CompletedTask from "components/Feed/components/TaskUnit/components/CompletedTask/index";
import SocialUnit from "components/Feed/components/TaskUnit/components/SocialUnit/index";

class ProfileFeed extends React.Component {
  componentDidMount() {
    const { user, fetchUserCompletedTasks: fetchTasks } = this.props;
    fetchTasks(user);
  }

  render() {
    const { user, tasksUser, isCurrUser } = this.props;
    let taskFeedList = null;
    if (tasksUser) {
      taskFeedList = tasksUser.map((taskF) => {
        const {
          _id,
          description,
          timestamp,
          givenClaps,
          mangoTransactions,
          user_id,
          isDone,
          completionTimestamp,
          startTimestamp,
        } = taskF;
        const { avatar, username, badges, profileUrl } = user;
        return (
          <div key={_id} className="feedPad">
            {givenClaps ? (
              <div className="row justify-content-center TaskUnit bg-light text-dark">
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
                      currUser={user._id}
                      profileTasks
                    />
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        );
      });
    }
    return (
      <div>
        {isCurrUser ? (
          <h1 style={{ textAlign: "center" }}>
            Your most recent completed tasks
          </h1>
        ) : (
          <h1 style={{ textAlign: "center" }}>
            {user.username}&apos;s most recent completed tasks
          </h1>
        )}
        <br />
        <div className="taskListFeed container justify-content-center align-self-center">
          {taskFeedList}
        </div>
      </div>
    );
  }
}

// state has entire state of app!!
const mapStateToProps = (state) => {
  return {
    tasksUser: state.feedDB.tasksUser,
  };
};

export default connect(mapStateToProps, { fetchUserCompletedTasks })(
  ProfileFeed
);
