import * as React from "react";
import MangoStalkModal from "./components/MangoStalkModal";

class MangoStalk extends React.Component {
  render() {
    const { followers, following, userID } = this.props;
    const isFollowers = true;
    return (
      <div className="row mt-3">
        <div className="col nopadding">
          <MangoStalkModal
            title="Followers"
            isFollowers={isFollowers}
            usersID={followers}
            userID={userID}
          />
        </div>
        <div className="col nopadding">
          <MangoStalkModal
            title="Following"
            isFollowers={!isFollowers}
            usersID={following}
            userID={userID}
          />
        </div>
      </div>
    );
  }
}

export default MangoStalk;
