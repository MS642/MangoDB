import * as React from "react";
import UserProfile from "../../../components/UserProfile";

class ProfilePage extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <div>
        <UserProfile
          profileUrl={location.pathname.replace(/^(\/user\/)/, "")}
        />
      </div>
    );
  }
}

export default ProfilePage;
