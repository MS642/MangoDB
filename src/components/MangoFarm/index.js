import * as React from "react";
import { connect } from "react-redux";
import { initializeMangoTreeAction } from "actions/mangoFarmActions";
import MangoTree from "./components/MangoTree";

class MangoFarm extends React.Component {
  componentDidMount() {
    const { userProfile, initializeMangoTree } = this.props;
    const { mangoTrees, _id } = userProfile;
    if (!mangoTrees || mangoTrees.length === 0) {
      initializeMangoTree(_id);
    }
  }

  render() {
    const { userProfile } = this.props;
    const { mangoTrees, _id, mangoMultiplier, mangoCount } = userProfile;

    const mangoTreesComponents = !mangoTrees
      ? []
      : mangoTrees.map((tree) => {
          const { id, level, mangos } = tree;
          return (
            <div>
              {mangoMultiplier < 1 || mangoCount < 300 ? (
                <h6 className="text-light text-center">
                  Psst, rumor has it that donating mangos makes the tree more
                  generous!
                </h6>
              ) : null}
              <MangoTree
                level={level}
                mangos={mangos}
                treeId={id}
                user_id={_id}
                key={id}
              />
            </div>
          );
        });
    return <div className="mangoFarm">{mangoTreesComponents}</div>;
  }
}

const mapStateToProps = ({ userProfileDB }) => {
  return { userProfile: userProfileDB };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initializeMangoTree: (user_id) =>
      dispatch(initializeMangoTreeAction(user_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MangoFarm);
