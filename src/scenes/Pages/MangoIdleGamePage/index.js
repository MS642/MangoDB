import * as React from "react";
import MangoTree from "components/MangoTree";
import { connect } from "react-redux";

class MangoIdleGamePage extends React.Component {
  render() {
    const { userProfile } = this.state;
    const { mangoTrees } = userProfile;
    return <MangoTree mangosGrowing={mangoTrees} />;
  }
}

const mapStateToProps = ({ userProfileDB }) => {
  return { userProfile: userProfileDB };
};

export default connect(mapStateToProps)(MangoIdleGamePage);
