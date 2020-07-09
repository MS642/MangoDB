import axios from "axios";

const FEED_URI = "http://localhost:8080/tasks/feed";
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

export const fetchFeedUsersRequest = () => {
  return {
    type: "FETCH_USERS_REQUEST"
  }
};

export const fetchFeedUsersSuccess = users => {
  return {
    type: "FETCH_USERS_SUCCESS",
    payload: users
  }
};

export const fetchFeedUsersFailure = error => {
  return {
    type: "FETCH_USERS_FAILURE",
    payload: error
  }
};

export const fetchFeedUsers = () => {
  return (dispatch) => {
    dispatch(fetchFeedUsersRequest());
    axios.get(USERS_URI)
      .then(response => {
        const users = response.data;
        dispatch(fetchFeedUsersSuccess(users));
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(fetchFeedUsersFailure(errorMsg));
      })
  }
};