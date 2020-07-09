import axios from "axios";

export const createNewTaskAction = (newTask, user_id) => {
  return (dispatch) => {
    return axios
      .post(`http://localhost:8080/tasks/${user_id}`, newTask)
      .then(({ data }) => {
        dispatch(createNewTask(data));
      })
      .catch(() => {
        // TODO: handle err
      });
  };
};

export const deleteTaskAction = (taskID) => {
  return (dispatch) => {
    return axios
      .delete(`http://localhost:8080/tasks/${taskID}`)
      .then(({ data }) => {
        dispatch(deleteTask(data));
      })
      .catch(() => {
        // TODO: handle err
      });
  };
};

const createNewTask = (newTask) => {
  return {
    type: "CREATE_TASK",
    payload: newTask,
  };
};

const deleteTask = (taskID) => {
  return {
    type: "TASK_DELETE",
    payload: taskID,
  };
};
