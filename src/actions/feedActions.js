import axios from "axios";
import { addErrorAlert } from "actions/alerts";

const TASKS_URI = "/tasks/";
const FEED_URI = "/tasks/feed";
const USERS_URI = "/users/feed";

export const fetchTasksSuccess = (tasks) => {
  return {
    type: "FETCH_TASKS_SUCCESS",
    payload: tasks,
  };
};

export const fetchFollowingTasksSuccess = (tasks) => {
  return {
    type: "FETCH_FOLLOWING_TASKS_SUCCESS",
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
      .catch((err) => {
        dispatch(addErrorAlert());
        console.error(err);
      });
  };
};

export const fetchFollowingFeed = (following) => {
  return (dispatch) => {
    axios
      .post(`${FEED_URI}/following`, following)
      .then((response) => {
        const tasks = response.data;
        dispatch(fetchFollowingTasksSuccess(tasks));
      })
      .catch((err) => {
        dispatch(addErrorAlert());
        console.error(err);
      });
  };
};

const putTaskClaps = (info) => {
  const { task_id } = info;
  return axios.put(FEED_URI.concat(`/claps/${task_id}`), info);
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
          dispatch(updateClapSuccess());
        })
      )
      .catch((err) => {
        dispatch(addErrorAlert());
        console.error(err);
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
      .then(() => {})
      .catch((err) => {
        dispatch(addErrorAlert());
        console.error(err);
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
  };
};
