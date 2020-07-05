import * as React from "react";
import BuildIcon from '@material-ui/icons/Build';
import { IconButton } from '@material-ui/core';

class Avatar extends React.Component {

  render() {
    const { profileImage } = this.props;
    return (
      <div className="bg-light" id="avatarBox">
        <div className={"row"}>
          <div className={"col"}>
            <img
              id="userAvatar"
              src={profileImage}
              width="180px"
              height="180px"
              alt=""
            />
          </div>
        </div>
        <div className={"row"}>
          <div className={"col-8"}></div>
          <div className={"col-4 d-flex align-content-end align-content-end"}>
            <IconButton id={"changePhotoButton"}><BuildIcon id={"changePhotoIcon"} /> </IconButton>
          </div>
        </div>
      </div>
    );
  }
}

export default Avatar;
