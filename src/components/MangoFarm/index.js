import * as React from "react";
import { connect } from "react-redux";
import MangoTree from "./components/MangoTree";

class MangoFarm extends React.Component {
  render() {
    const { userProfile } = this.props;
    const { mangoTrees, _id } = userProfile;
    const mangoTreesComponents = mangoTrees.map((tree) => {
      const { id, level, mangos } = tree;
      return (
        <MangoTree
          level={level}
          mangos={mangos}
          treeId={id}
          user_id={_id}
          key={id}
        />
      );
    });
    return <div className="mangoFarm">{mangoTreesComponents}</div>;
  }
}

const mapStateToProps = ({ userProfileDB }) => {
  return { userProfile: userProfileDB };
};

export default connect(mapStateToProps)(MangoFarm);
