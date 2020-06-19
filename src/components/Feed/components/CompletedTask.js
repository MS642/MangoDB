import * as React from "react";
import "../Feed.scss";
import "../Feed.css";
import moment from "moment";

class CompletedTask extends React.Component {
  render() {
    const { avatar, name, taskMessage, date } = this.props;
    return (
      <div className="container CompletedTask">
        <div className="row">
          <div className="col-1 AvatarCol">
            <img
              src={avatar}
              width="60px"
              height="60px"
              className="userAvatar"
              alt=""
            />
          </div>
          <div className="col-9 d-flex justify-content-start text-start">
            <span>
              <strong>{name}</strong> started the task "{taskMessage}"!
            </span>
          </div>
          <div className="col-2 TimestampCol d-flex justify-content-end text-end">
            {moment(date).fromNow()}
          </div>
        </div>
      </div>
    );
  }
}

export default CompletedTask;
