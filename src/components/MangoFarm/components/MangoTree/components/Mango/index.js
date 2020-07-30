import * as React from "react";
import { Tooltip } from "@material-ui/core";
import { getMinuteDifference } from "services/Date";
import "./index.scss";

const MANGOSTATE = {
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
      return MANGOSTATE.UNRIPE;
    }
    if (ripePercentage < 1) {
      return MANGOSTATE.RIPENING;
    }
    return MANGOSTATE.RIPE;
  };

  harvestMango = (ripePercentage) => {
    const { user_id, treeId, index } = this.props;
    // TODO: Implement
    return user_id + treeId + index + ripePercentage;
  };

  render() {
    const ripePercentage = this.getRipePercentage();
    const mangoColor = this.getMangoColor(ripePercentage);
    const iconClassName = "material-icons";

    return (
      <li className="mango">
        <Tooltip title={ripePercentage} placement="right">
          <button className="mangoButton" type="button">
            <i className={`${iconClassName} ${mangoColor}`}>
              {ripePercentage < 0.05 ? "filter_vintage" : "lens"}
            </i>
          </button>
        </Tooltip>
      </li>
    );
  }
}

export default Mango;
