import * as React from "react";
import MangoStalkModal from "./components/MangoStalkModal";

class MangoStalk extends React.Component {
  render() {
    const { followers, user, following, isFollowers } = this.props;
    let usersID = [];
    if (isFollowers) {
      usersID = followers;
    } else {
      usersID = following;
    }
    return (
      <MangoStalkModal
        isFollowers={isFollowers}
        usersID={usersID}
        profile={user}
      />
    );
  }
}

export default MangoStalk;
