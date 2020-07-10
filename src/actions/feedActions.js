import axios from "axios";

const FEED_URI = "http://localhost:8080/tasks/feed";
const USERS_URI = "http://localhost:8080/users/feed";


export const fetchTasksSuccess = tasks => {
  return {
    type: "FETCH_TASKS_SUCCESS",
    payload: tasks
  }
};


export const fetchFeedTasks = () => {
  return (dispatch) => {
    axios.get(FEED_URI)
      .then(response => {
        const tasks = response.data;
        dispatch(fetchTasksSuccess(tasks));
      })
      .catch(error => {
        console.error(error.message);
      })
  }
};


export const addClapSuccess = tasks => {
  return {
    type: "ADD_CLAP_SUCCESS",
    payload: tasks
  }
};

export const addClapToTask = (info) => {
  return (dispatch) => {
    axios.all([putTaskClaps(info), putUserClaps(info)])
      .then(axios.spread( ( ) => {
        // Both requests are now complete
        dispatch(fetchFeedTasks());
      }))
      .catch(error => {
        console.error(error.message);
      })
  }
};


function putTaskClaps(info) {
  return axios.put(FEED_URI.concat('/claps/' + info.task_id), info);
}

function putUserClaps(info) {
  return axios.put(USERS_URI.concat('/claps/' + info.user_id), info);
}


export const addMango = (info) => {
  return {
    type: "ADD_MANGO",
    payload: info,
  };
};


function putTaskMangos(info) {
  return axios.put(FEED_URI.concat('/mangos/' + info.task_id), info);
}

function putUserMangos(info) {
  return axios.put(USERS_URI.concat('/mangos/' + info.user_id), info);
}


export const addMangoToTask = (info) => {
  console.log("addMangoToTask:", FEED_URI.concat('/mangos/' + info.task_id));
  return (dispatch) => {
    axios.all([putTaskMangos(info), putUserMangos(info)])
      .then(axios.spread( ( ) => {
        // Both requests are now complete
        dispatch(fetchFeedTasks());
      }))
      .catch(error => {
        console.error(error.message);
      })
  }
};