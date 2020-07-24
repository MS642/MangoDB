import * as React from "react";
import moment from "moment";
import "../../../../Feed.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

class CompletedTask extends React.Component {
  render() {
    const { avatar, name, taskMessage, date, isDone, badges } = this.props;
    let badge = "";
    if (badges.length > 0) {
      const classString = "material-icons badgeIcon ".concat(badges[0].badge);
      badge = (
        <OverlayTrigger
          key="top"
          placement="top"
          overlay={<Tooltip id="tooltip-top">{badges[0].rank}</Tooltip>}
        >
          <i className={classString}>{badges[0].badge}</i>
        </OverlayTrigger>
      );
    }

    return (
      <div className="container CompletedTask">
        <div className="row">
          <div className="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2 AvatarCol d-flex justify-content-center align-items-center">
            <img
              src={avatar}
              width="60px"
              height="60px"
              className="userAvatars"
              alt=""
            />
          </div>
          <div className="col-xl-9 col-lg-9 col-md-9 col-sm-7 col-7 d-flex justify-content-start text-start">
            <span>
              {badge}
              <strong>{name}</strong>{" "}
              {isDone ? (
                <strong>
                  <span className="completedDesc">completed</span>
                </strong>
              ) : (
                "started"
              )}{" "}
              the task &quot;{taskMessage}
              &quot;!
            </span>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3 TimestampCol d-flex justify-content-end text-end">
            {moment(date).fromNow()}
          </div>
        </div>
      </div>
    );
  }
}

export default CompletedTask;
