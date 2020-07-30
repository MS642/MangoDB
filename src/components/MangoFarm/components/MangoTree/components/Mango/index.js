import * as React from "react";
import { getMinuteDifference } from "services/Date";
import "./index.scss";

class Mango extends React.Component {
  determineRipeness = () => {
    const { timestamp, fullGrowthMinutes } = this.props;

    const now = new Date();
    const minutesOld = getMinuteDifference(timestamp, now.getTime());
    if (minutesOld < (1 / 2) * fullGrowthMinutes) {
      return "unripe";
    }
    if (minutesOld < fullGrowthMinutes) {
      return "ripening";
    }
    return "ripe";
  };

  render() {
    const {
      // fullGrowthMinutes,
      // maxMangos,
      // minMangos,
      timestamp,
      // index
    } = this.props;
    return <li className={`mango ${this.determineRipeness()}`}>{timestamp}</li>;
  }
}

export default Mango;
