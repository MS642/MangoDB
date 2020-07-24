import axios from "axios";
import { addErrorAlert } from "actions/alerts";

const TASKS_URI = "/tasks";

export const createSubTaskAction = (taskID, newSubTask) => {
  return (dispatch) => {
    return axios
      .post(TASKS_URI.concat(`/${taskID}/subTasks`), newSubTask)
      .then(({ data }) => {
        dispatch(createSubTask(taskID, data));
      })
      .catch((err) => {
        dispatch(addErrorAlert());
        console.error(err);
      });
  };
};

export const deleteSubTaskAction = (taskID, subTaskID) => {
  return (dispatch) => {
    return axios
      .delete(TASKS_URI.concat(`/${taskID}/subTasks/${subTaskID}`))
      .then(() => {
        dispatch(deleteSubTask(taskID, subTaskID));
      })
      .catch((err) => {
        dispatch(addErrorAlert());
        console.error(err);
      });
  };
};

export const updateSubTaskAction = (taskID, subTaskID, newSubTask) => {
  return (dispatch) => {
    return axios
      .put(TASKS_URI.concat(`/${taskID}/subTasks/${subTaskID}`), newSubTask)
      .then(() => {
        dispatch(updateSubTask(taskID, subTaskID, newSubTask));
      })
      .catch((err) => {
        dispatch(addErrorAlert());
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
