import * as React from "react";

class Avatar extends React.Component {

  render() {
    const { profileImage } = this.props;
    return (
      <div className="bg-light" id="avatarBox">
        <img
          id="userAvatar"
          src={profileImage}
          width="180px"
          height="180px"
          alt=""
        />
      </div>
    );
  }
}

export default Avatar;
