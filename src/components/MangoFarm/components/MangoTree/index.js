import * as React from "react";
import Mango from "./components/Mango";
import MANGO_TREE_DATA from "./MANGO_TREE_DATA";

class MangoTree extends React.Component {
  render() {
    const { treeId, mangos, user_id } = this.props;
    const { fullGrowthMinutes } = MANGO_TREE_DATA;
    let index = 0;
    const growingMangos = !mangos
      ? [<div />]
      : mangos.map((mangoTimestamp) => {
          index += 1;
          return (
            <Mango
              fullGrowthMinutes={fullGrowthMinutes}
              timestamp={mangoTimestamp}
              index={index}
              key={index}
              user_id={user_id}
              treeId={treeId}
            />
          );
        });
    return <ul className="mangoTree">{growingMangos}</ul>;
  }
}

export default MangoTree;
