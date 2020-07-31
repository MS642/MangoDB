import * as React from "react";
import Mango from "./components/Mango";
import { ReactComponent as MangoTreeSVG } from "./mango-tree.svg";
import MANGO_TREE_DATA from "./MANGO_TREE_DATA";
import "./index.scss";

class MangoTree extends React.Component {
  render() {
    const { treeId, mangos, user_id } = this.props;
    const { fullGrowthMinutes } = MANGO_TREE_DATA;
    let index = 0;
    const growingMangos = !mangos
      ? [<div />]
      : mangos.map((mangoTimestamp) => {
          const mangoComp = (
            <Mango
              fullGrowthMinutes={fullGrowthMinutes}
              timestamp={mangoTimestamp}
              index={index}
              key={index}
              user_id={user_id}
              treeId={treeId}
            />
          );
          index += 1;
          return mangoComp;
        });

    return (
      <div className="mangoTree">
        <MangoTreeSVG className="mangoTreeSVG" />
        {growingMangos}
      </div>
    );
  }
}

export default MangoTree;
