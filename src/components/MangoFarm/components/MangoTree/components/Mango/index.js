import * as React from "react";
import { connect } from "react-redux";
import { Tooltip } from "@material-ui/core";
import { getMinuteDifference } from "services/Date";
import { harvestMangoAction } from "actions/mangoFarmActions";
import "./index.scss";

const MANGO_STATE = {
  UNRIPE: "unripe",
  RIPENING: "ripening",
  RIPE: "ripe",
};

class Mango extends React.Component {
  getRipePercentage = () => {
    const { timestamp, fullGrowthMinutes } = this.props;
    const now = new Date().getTime();
    return getMinuteDifference(timestamp, now) / fullGrowthMinutes;
  };

  getMangoColor = (ripePercentage) => {
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
    const mangoColor = this.getMangoColor(ripePercentage);
    const iconClassName = "material-icons";

    return (
      <li className="mango">
        <Tooltip title={ripePercentage} placement="right">
          <button
            className="mangoButton"
            type="button"
            onClick={this.harvestMangoHandler}
          >
            <i className={`${iconClassName} ${mangoColor}`}>
              {ripePercentage < 0.05 ? "filter_vintage" : "lens"}
            </i>
          </button>
        </Tooltip>
      </li>
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
