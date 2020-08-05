import * as React from "react";
import { connect } from "react-redux";
import { Tooltip } from "@material-ui/core";
import { getMinuteDifference } from "services/Date";
import { harvestMangoAction } from "actions/mangoFarmActions";
import { addAlert } from "actions/alerts";
import { AlertType } from "reducers/alertReducer";
import "./index.scss";
import { MANGO_STATE, MANGO_TIPS } from "./MANGO_CONSTANTS";

class Mango extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left: null,
      top: null,
      ripePercentage: this.getRipePercentage(),
    };
  }

  componentDidMount() {
    this.setMangoPositions();
    window.addEventListener("resize", this.setMangoPositions);
    this.interval = setInterval(
      () => this.setState({ ripePercentage: this.getRipePercentage() }),
      5000
    );
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setMangoPositions);
    clearInterval(this.interval);
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

  setRipePercentage = () => {
    this.setState({ ripePercentage: this.getRipePercentage() });
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
    const {
      user_id,
      treeId,
      index,
      harvestMango,
      dispatchAddAlert,
    } = this.props;
    const { RIPENING, RIPE } = MANGO_STATE;
    this.setRipePercentage();
    const { ripePercentage } = this.state;
    const { mangoMultiplier } = this.props;
    const mangoState = this.getMangoState(ripePercentage);
    if (mangoState === RIPENING || mangoState === RIPE) {
      harvestMango(user_id, treeId, index, mangoMultiplier);
      this.setState({ ripePercentage: 0 });
      return;
    }
    dispatchAddAlert(AlertType.NORMAL, "Mango is not ready for harvest!");
  };

  render() {
    const { ripePercentage } = this.state;
    const mangoState = this.getMangoState(ripePercentage);
    const iconClassName = "material-icons";
    const { top, left } = this.state;

    return (
      <div className="mangoItem" style={{ top, left }}>
        <Tooltip title={MANGO_TIPS[mangoState]} placement="right">
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

const mapStateToProps = (state) => {
  return { mangoMultiplier: state.userProfileDB.mangoMultiplier };
};

const mapDispatchToProps = (dispatch) => {
  return {
    harvestMango: (user_id, treeId, mangoIndex, mangoMultiplier) => {
      dispatch(
        harvestMangoAction(user_id, treeId, mangoIndex, mangoMultiplier)
      );
    },
    dispatchAddAlert: (status, content) => {
      dispatch(addAlert(status, content));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Mango);
