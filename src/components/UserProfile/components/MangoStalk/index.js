import * as React from "react";
import MangoStalkModal from "./components/MangoStalkModal";

class MangoStalk extends React.Component {
  render() {
    const { followers, following } = this.props;
    return (
      <div className="row mt-3">
        <div className="col nopadding">
          <MangoStalkModal title="Followers" users={followers} />
        </div>
        <div className="col nopadding">
          <MangoStalkModal title="Following" users={following} />
        </div>
      </div>
    );
  }
}

export default MangoStalk;
