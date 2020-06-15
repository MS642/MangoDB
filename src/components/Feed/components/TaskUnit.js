import * as React from "react";
import "../Feed.scss";
import "../Feed.css";
import { connect } from "react-redux";
import CompletedTask from "./CompletedTask";
import SocialUnit from "./SocialUnit";
import AddComment from "./AddComment";
import CommentUnit from "./CommentUnit";

class TaskUnit extends React.Component {
  render() {
    console.log("taskunit state:", this.props.feedTasks);
    const { feedTasks } = this.props;
    const taskFeedList = feedTasks.map((taskF) => {
      const { user, avatarURL, task, claps, mangoBits, timestamp, id } = taskF;
      return (
        <div key={id} className="feedPad">
          <div className="row justify-content-center TaskUnit bg-light text-dark">
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
};

//state has entire state of app!!
const mapStateToProps = (state) => {
  return { feedTasks: state.feed.feedTasks };
};

export default connect(mapStateToProps)(TaskUnit);
