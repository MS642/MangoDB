import * as React from "react";
import Mango from "./components/Mango";
import MANGOTREEDATA from "./MANGOTREEDATA";

class MangoTree extends React.Component {
  render() {
    const { treeId, level, mangos } = this.props;
    const {
      fullGrowthMinutes,
      levelToMaxMangos,
      levelToMinMangos,
    } = MANGOTREEDATA;
    let index = 0;
    const growingMangos = !mangos
      ? [<div />]
      : mangos.map((mangoTimestamp) => {
          index += 1;
          return (
            <Mango
              fullGrowthMinutes={fullGrowthMinutes}
              maxMangos={levelToMaxMangos(level)}
              minMangos={levelToMinMangos(level)}
              timestamp={mangoTimestamp}
              index={index}
              key={index}
              treeId={treeId}
            />
          );
        });
    return <ul className="mangoTree">{growingMangos}</ul>;
  }
}

export default MangoTree;
