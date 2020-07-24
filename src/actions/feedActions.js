import axios from "axios";
import { addAlert } from "actions/alerts";

const TASKS_URI = "/tasks/";
const FEED_URI = "/tasks/feed";
const USERS_URI = "/users/feed";

export const fetchTasksSuccess = (tasks) => {
  return {
    type: "FETCH_TASKS_SUCCESS",
    payload: tasks,
  };
};

export const fetchFeedTasks = () => {
  return (dispatch) => {
    axios
      .get(FEED_URI)
      .then((response) => {
        const tasks = response.data;
        dispatch(fetchTasksSuccess(tasks));
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
};

export const fetchFollowingFeed = (following) => {
  return (dispatch) => {
    axios
      .post(`${FEED_URI}/following`, following)
      .then((response) => {
        const tasks = response.data;
        dispatch(fetchTasksSuccess(tasks));
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
};

const putTaskClaps = (info) => {
  return axios.put(FEED_URI.concat(`/claps/${info.task_id}`), info);
};

const putUserClaps = (info) => {
  return axios.put(USERS_URI.concat(`/claps/${info.user_id}`), info);
};

export const updateLocalClap = (info) => {
  return {
    type: "ADD_CLAP",
    payload: info,
  };
};

export const updateClapSuccess = () => {
  return {
    type: "UPDATE_CLAP_SUCCESS",
  };
};

export const addClapToTask = (info) => {
  return (dispatch) => {
    dispatch(updateLocalClap(info));
    axios
      .all([putTaskClaps(info), putUserClaps(info)])
      .then(
        axios.spread(() => {
          // Both requests are now complete
          if (info.value !== -1) {
            dispatch(addAlert(200, "Claps given!"));
          }
          dispatch(updateClapSuccess());
        })
      )
      .catch((error) => {
        dispatch(addAlert(error.status, "Error: Failed to give clap!"));
      });
  };
};

export const updateLocalMango = (info) => {
  return {
    type: "ADD_MANGO",
    payload: info,
  };
};

export const addMangoSuccess = () => {
  return {
    type: "ADD_MANGO_SUCCESS",
  };
};

export const addMangoToTask = (info) => {
  const { task_id, numMango, donor } = info;
  return (dispatch) => {
    dispatch(updateLocalMango(info));
    axios
      .post(`${TASKS_URI}${task_id}/mangoTransactions`, {
        user_id: donor,
        mangoCount: numMango,
      })
      .then(() => {
        dispatch(addAlert(200, `Mangos ${numMango} given!`));
        // no need for mango success since updateLocalMango updates mango state
        // dispatch(addMangoSuccess());
      })
      .catch((error) => {
        dispatch(addAlert(error.status, "Error: Failed to give mangos!"));
      });
  };
};

export const changeFeedHelper = (boolean) => {
  return {
    type: "CHANGE_FEED_TYPE",
    payload: boolean,
  };
};

export const changeFeedType = (info) => {
  return (dispatch) => {
    dispatch(changeFeedHelper(info.global));
    if (info.global) {
      dispatch(fetchFeedTasks());
    } else {
      dispatch(fetchFollowingFeed(info.following));
    }
  };
};
