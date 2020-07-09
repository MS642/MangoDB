import axios from "axios";

export const fetchTasksAction = (user_id) => {
  return (dispatch) => {
    return axios
      .get(`http://localhost:8080/tasks/${user_id}`)
      .then(({ data }) => {
        dispatch(fetchTasks(data));
      })
      .catch(() => {
        // TODO: handle err
      });
  };
};

export const deleteTasksAction = (user_id) => {
  return (dispatch) => {
    return axios
      .delete(`http://localhost:8080/tasks/${user_id}`)
      .then(({ data }) => {
        dispatch(deleteTasks(data));
      })
      .catch(() => {
        // TODO: handle err
      });
  };
};

const fetchTasks = (data) => {
  return {
    type: "TASKS_SET",
    payload: data,
  };
};

const deleteTasks = (user_id) => {
  return {
    type: "TASKS_DELETE",
    payload: user_id,
  };
};
