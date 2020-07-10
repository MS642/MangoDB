import axios from "axios";

export const selectTaskItem = (taskID) => {
  return {
    type: "TASK_SELECT",
    payload: taskID,
  };
};

export const updateTaskItemAction = (task_id, taskChanges) => {
  return (dispatch) => {
    return axios
      .put(`http://localhost:8080/tasks/${task_id}`, taskChanges)
      .then(() => {
        dispatch(updateTaskItem(task_id, taskChanges));
      })
      .catch(() => {
        // handle error
      });
  };
};

export const updateTaskItem = (task_id, taskChanges) => {
  return {
    type: "TASK_UPDATE",
    payload: {
      task_id,
      taskChanges,
    },
  };
};

export const deleteTaskItem = (taskID) => {
  return {
    type: "TASK_DELETE",
    payload: taskID,
  };
};
