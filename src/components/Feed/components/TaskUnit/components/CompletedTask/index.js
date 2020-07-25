import * as React from "react";
import moment from "moment";
import "../../../../Feed.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { useHistory } from "react-router-dom";

import "./completedtask.css";

const CompletedTask = (props) => {
  const history = useHistory();
  const { avatar, name, taskMessage, date, isDone, badges, profileUrl } = props;
  let badge = "";
  if (badges.length > 0) {
    badge = (
      <OverlayTrigger
        key="top"
        placement="top"
        overlay={<Tooltip id="tooltip-top">{badges[0].rank}</Tooltip>}
      >
        <i
          className="material-icons badgeIcon"
          style={{ color: `${badges[0].color}` }}
        >
          {badges[0].badge}
        </i>
      </OverlayTrigger>
    );
  }

  return (
    <div className="container CompletedTask">
      <div className="row">
        <div className="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2 AvatarCol d-flex justify-content-center align-items-center">
          <button
            onClick={() => goToUserProfile(history, profileUrl)}
            type="button"
          >
            <img
              src={avatar}
              width="60px"
              height="60px"
              className="userAvatars clickable"
              alt=""
            />
          </button>
        </div>
        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-7 col-7 d-flex justify-content-start text-start">
          <span>
            {badge}
            <button
              onClick={() => goToUserProfile(history, profileUrl)}
              type="button"
            >
              <strong>{name}</strong>{" "}
            </button>
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
};

const goToUserProfile = (history, profileUrl) => {
  history.push(`/user/${profileUrl}`);
};

export default CompletedTask;
