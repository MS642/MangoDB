import axios from "axios";

export const createSubTaskAction = (taskID, newSubTask) => {
  return (dispatch) => {
    return axios
      .post(`http://localhost:8080/tasks/${taskID}/subTasks`, newSubTask)
      .then(({ data }) => {
        dispatch(createSubTask(taskID, data));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const deleteSubTaskAction = (taskID, subTaskID) => {
  // add dispatch here later
  return (dispatch) => {
    return axios
      .delete(`http://localhost:8080/tasks/${taskID}/subTasks/${subTaskID}`)
      .then(() => {
        dispatch(deleteSubTask(taskID, subTaskID));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const updateSubTaskAction = (taskID, subTaskID, newSubTask) => {
  return (dispatch) => {
    return axios
      .put(
        `http://localhost:8080/tasks/${taskID}/subTasks/${subTaskID}`,
        newSubTask
      )
      .then(() => {
        dispatch(updateSubTask(taskID, subTaskID, newSubTask));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

const createSubTask = (taskID, newSubTask) => {
  return {
    type: "SUBTASK_CREATE",
    payload: {
      taskID,
      newSubTask,
    },
  };
};

const updateSubTask = (taskID, subTaskID, newSubTask) => {
  return {
    type: "SUBTASK_UPDATE",
    payload: {
      taskID,
      subTaskID,
      newSubTask,
    },
  };
};

const deleteSubTask = (taskID, subTaskID) => {
  return {
    type: "SUBTASK_DELETE",
    payload: {
      taskID,
      subTaskID,
    },
  };
};
