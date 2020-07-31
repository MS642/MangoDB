import * as React from "react";
import { connect } from "react-redux";
import { Tooltip } from "@material-ui/core";
import { getMinuteDifference } from "services/Date";
import { harvestMangoAction } from "actions/mangoFarmActions";
import "./index.scss";

const MANGO_STATE = {
  BLOOMING: "blooming",
  UNRIPE: "unripe",
  RIPENING: "ripening",
  RIPE: "ripe",
};

class Mango extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left: null,
      top: null,
    };
  }

  componentDidMount() {
    this.setMangoPositions();
    window.addEventListener("resize", this.setMangoPositions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setMangoPositions);
  }

  setMangoPositions = () => {
    const { index } = this.props;
    const mangoSpawnPoints = document.getElementsByClassName("mangoSpawnPoint");
    const spawnPointRect = mangoSpawnPoints[index].getBoundingClientRect();
    const { left, top } = spawnPointRect;
    this.setState({ left, top });
  };

  getRipePercentage = () => {
    const { timestamp, fullGrowthMinutes } = this.props;
    const now = new Date().getTime();
    return getMinuteDifference(timestamp, now) / fullGrowthMinutes;
  };

  getMangoState = (ripePercentage) => {
    if (ripePercentage < 0.05) {
      return MANGO_STATE.BLOOMING;
    }
    if (ripePercentage < 0.5) {
      return MANGO_STATE.UNRIPE;
    }
    if (ripePercentage < 1) {
      return MANGO_STATE.RIPENING;
    }
    return MANGO_STATE.RIPE;
  };

  harvestMangoHandler = () => {
    const { user_id, treeId, index, harvestMango } = this.props;
    harvestMango(user_id, treeId, index);
  };

  render() {
    const ripePercentage = this.getRipePercentage();
    const mangoState = this.getMangoState(ripePercentage);
    const iconClassName = "material-icons";
    const { top, left } = this.state;

    return (
      <div className="mangoItem" style={{ top, left }}>
        <Tooltip title={ripePercentage} placement="right">
          <button
            className="mangoButton"
            type="button"
            onClick={this.harvestMangoHandler}
          >
            <i className={`${iconClassName} ${mangoState}`}>
              {mangoState === MANGO_STATE.BLOOMING ? "filter_vintage" : "lens"}
            </i>
          </button>
        </Tooltip>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    harvestMango: (user_id, treeId, mangoIndex) => {
      dispatch(harvestMangoAction(user_id, treeId, mangoIndex));
    },
  };
};

export default connect(null, mapDispatchToProps)(Mango);
