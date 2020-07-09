import axios from "axios";

const FEED_URI = "http://localhost:8080/tasks/feed";
const USERS_URI = "http://localhost:8080/users";


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

