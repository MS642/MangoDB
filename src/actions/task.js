import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { addAlert } from "actions/alerts";

const routePrefix = "/tasks/";
// THUNK ACTIONS MAKING AXIOS CALLS
export const fetchTasksAction = (user_id) => {
  return (dispatch) => {
    return axios
      .get(`${routePrefix}${user_id}`)
      .then(({ data }) => {
        dispatch(fetchTasks(data));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const createNewTaskAction = (newTask, user_id) => {
  return (dispatch) => {
    const tempID = uuidv4();
    const updatedTask = {
      ...newTask,
    };
    updatedTask._id = tempID;
    dispatch(createNewTask(newTask));
    return axios
      .post(`${routePrefix}${user_id}`, updatedTask)
      .then(({ data }) => {
        dispatch(addAlert(200, "Task added!"));
        dispatch(confirmNewTaskCreated(tempID, data));
      })
      .catch((err) => {
        console.error(err);
        dispatch(failedNewTaskCreated(tempID));
      });
  };
};

export const updateTaskItemAction = (task_id, taskChanges) => {
  return (dispatch) => {
    return axios
      .put(`${routePrefix}${task_id}`, taskChanges)
      .then(() => {
        dispatch(addAlert(201, "Task edited!"));
        dispatch(updateTaskItem(task_id, taskChanges));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const deleteTaskItemAction = (task_id) => {
  return (dispatch) => {
    return axios
      .delete(`${routePrefix}${task_id}`)
      .then(() => {
        dispatch(addAlert(201, "Task deleted!"));
        dispatch(deleteTaskItem(task_id));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

// ACTIONS DISPATCHED TO TASKS REDUCER
const fetchTasks = (data) => {
  return {
    type: "TASKS_SET",
    payload: data,
  };
};

const createNewTask = (newTask) => {
  return {
    type: "TASK_CREATE",
    payload: newTask,
  };
};

const confirmNewTaskCreated = (tempID, newTask) => {
  return {
    type: "TASK_CREATED_CONFIRM",
    payload: {
      tempID,
      newTask,
    },
  };
};

const failedNewTaskCreated = () => {
  return {
    type: "TASK_CREATED_FAIL",
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

const deleteTaskItem = (taskID) => {
  return {
    type: "TASK_DELETE",
    payload: taskID,
  };
};
