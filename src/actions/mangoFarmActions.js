import axios from "axios";
import { addAlert, addErrorAlert } from "actions/alerts";
import { AlertType } from "reducers/alertReducer";
import { addMango } from "./profileActions";

const routePrefix = "/users/";
export const initializeMangoTreeAction = (user_id) => {
  return (dispatch) => {
    axios
      .put(`${routePrefix}${user_id}/mangoTrees/initialize`)
      .then(({ data }) => {
        const { mangoTrees } = data;
        dispatch(initializeMangoTree(mangoTrees));
      })
      .catch((err) => {
        dispatch(addErrorAlert());
        console.error(err);
      });
  };
};

export const harvestMangoAction = (
  user_id,
  treeId,
  mangoIndex,
  mangoMultiplier
) => {
  return (dispatch) => {
    dispatch(harvestMango(treeId, mangoIndex));
    axios
      .put(
        `${routePrefix}${user_id}/mangoTrees/${treeId}/${mangoIndex}/harvestMango`
      )
      .then(({ data }) => {
        const { mangoReward: mangoNum } = data;
        // mango reward multiplier
        const mangoReward = Math.round(mangoNum * mangoMultiplier);
        dispatch(addMango(mangoReward));
        dispatch(addAlert(AlertType.MANGO, `Harvested ${mangoReward} mangos!`));
        return axios.put(`${routePrefix}${user_id}/addMangos`, {
          mangosEarned: mangoReward,
        });
      })
      .catch((err) => {
        dispatch(addErrorAlert());
        console.error(err);
      });
  };
};

const initializeMangoTree = (mangoTrees) => {
  return {
    type: "INITIALIZE_MANGO_TREE",
    payload: mangoTrees,
  };
};

const harvestMango = (treeId, mangoIndex) => {
  return {
    type: "HARVEST_MANGO",
    payload: { treeId, mangoIndex },
  };
};
