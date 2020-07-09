import axios from "axios";

const FEED_URI = "http://localhost:8080/tasks";
const USERS_URI = "http://localhost:8080/users";

export const fetchTasksRequest = () => {
  return {
    type: "FETCH_TASKS_REQUEST"
  }
};

export const fetchTasksSuccess = tasks => {
  return {
    type: "FETCH_TASKS_SUCCESS",
    payload: tasks
  }
};


export const fetchTasksFailure = error => {
  return {
    type: "FETCH_TASKS_FAILURE",
    payload: error
  }
};

export const fetchFeedTasks = () => {
  return (dispatch) => {
    dispatch(fetchTasksRequest());
    axios.get(FEED_URI)
      .then(response => {
        const tasks = response.data;
        dispatch(fetchTasksSuccess(tasks));
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(fetchTasksFailure(errorMsg));
      })
  }
};