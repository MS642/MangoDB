import * as React from "react";
import MangoFarm from "components/MangoFarm";

class MangoIdleGamePage extends React.Component {
  render() {
    return <MangoFarm />;
  }
}

// const mapStateToProps = ({ userProfileDB }) => {
//   return { userProfile: userProfileDB };
// };

// export default connect(mapStateToProps)(MangoIdleGamePage);
export default MangoIdleGamePage;
