import axios from "axios";
import { addErrorAlert } from "actions/alerts";

const TASKS_URI = "/tasks/";
const FEED_URI = "/tasks/feed";
const USERS_URI = "/users/feed";

// update state with new global tasks
export const fetchTasksSuccess = (tasks) => {
  return {
    type: "FETCH_TASKS_SUCCESS",
    payload: tasks,
  };
};
// update state with new following tasks
export const fetchFollowingTasksSuccess = (tasks) => {
  return {
    type: "FETCH_FOLLOWING_TASKS_SUCCESS",
    payload: tasks,
  };
};
// update state with user tasks for profile page
export const fetchUserCompletedTasksSuccess = (tasks) => {
  return {
    type: "FETCH_USER_COMPLETED_TASKS_SUCCESS",
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

export const fetchUserCompletedTasks = (user) => {
  return (dispatch) => {
    axios
      .post(`${TASKS_URI}/profile/${user._id}`)
      .then((response) => {
        const tasks = response.data;
        dispatch(fetchUserCompletedTasksSuccess(tasks));
      })
      .catch((err) => {
        dispatch(addErrorAlert());
        console.error(err);
      });
  };
};

// add claps to task
const putTaskClaps = (info) => {
  const { task_id } = info;
  return axios.put(FEED_URI.concat(`/claps/${task_id}`), info);
};
// increment user's clapsGiven
const putUserClaps = (info) => {
  return axios.put(USERS_URI.concat(`/claps/${info.user_id}`), info);
};

// update local clap count
export const updateLocalClap = (info) => {
  return {
    type: "ADD_CLAP",
    payload: info,
  };
};

// toggle off loading state
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

// update local Mango wallet and task feed mangos
export const updateLocalMango = (info) => {
  return {
    type: "ADD_MANGO",
    payload: info,
  };
};
// toggle off loading state
export const addMangoSuccess = () => {
  return {
    type: "ADD_MANGO_SUCCESS",
  };
};

// deduct mango from donor
const putUserMangoWallet = (info) => {
  return axios.post(USERS_URI.concat(`/deductMango`), info);
};

// add mango to task
const putTasksUserMango = (info) => {
  const { task_id, numMango, donor } = info;
  return axios.post(`${TASKS_URI}${task_id}/mangoTransactions`, {
    user_id: donor,
    mangoCount: numMango,
  });
};

export const addMangoToTask = (info) => {
  return (dispatch) => {
    dispatch(updateLocalMango(info));
    axios
      .all([putTasksUserMango(info), putUserMangoWallet(info)])
      .then(
        axios.spread(() => {
          dispatch(addMangoSuccess());
        })
      )
      .catch((err) => {
        dispatch(addErrorAlert());
        console.error(err);
      });
  };
};

// toggles feed type
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
