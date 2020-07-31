import axios from "axios";
import { addErrorAlert } from "actions/alerts";

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

export const harvestMangoAction = (user_id, treeId, mangoIndex) => {
  return (dispatch) => {
    dispatch(harvestMango(user_id, treeId, mangoIndex));
  };
};

const initializeMangoTree = (mangoTrees) => {
  return {
    type: "INITIALIZE_MANGO_TREE",
    payload: mangoTrees,
  };
};

const harvestMango = (mangoReward) => {
  return {
    type: "HARVEST_MANGO",
    payload: mangoReward,
  };
};
