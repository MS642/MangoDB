import * as React from "react";
import UserProfile from "../../../components/UserProfile";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);

    const { location } = this.props;
    this.state = {
      profileUrl: location.pathname.replace(/^(\/user\/)/, ""),
    };
  }

  render() {
    const { profileUrl } = this.state;
    return (
      <div>
        <UserProfile profileUrl={profileUrl} />
      </div>
    );
  }
}

export default ProfilePage;
