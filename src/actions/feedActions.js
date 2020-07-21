import axios from "axios";
import { addAlert } from "actions/alerts";

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
          // dispatch(fetchFeedTasks());
        })
      )
      .catch((error) => {
        console.error(error.message);
      });
  };
};

function putTaskMangos(info) {
  return axios.put(FEED_URI.concat(`/mangos/${info.task_id}`), info);
}

function putUserMangos(info) {
  return axios.put(USERS_URI.concat(`/mangos/${info.user_id}`), info);
}

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
  return (dispatch) => {
    dispatch(updateLocalMango(info));
    axios
      .all([putTaskMangos(info), putUserMangos(info)])
      .then(
        axios.spread(() => {
          // Both requests are now complete
          dispatch(addAlert(200, "Mangos given!"));
          // dispatch(fetchFeedTasks());
          dispatch(addMangoSuccess());
        })
      )
      .catch((error) => {
        console.error(error.message);
      });
  };
};
