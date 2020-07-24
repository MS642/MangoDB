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
      _id: tempID,
    };
    dispatch(createTask(updatedTask));
    return axios
      .post(`${routePrefix}${user_id}`, updatedTask)
      .then(({ data }) => {
        dispatch(addAlert(200, "Task added!"));
        dispatch(taskCreateSuccess(tempID, data));
      })
      .catch((err) => {
        dispatch(addAlert(err.status, "Failed to create a new task!"));
      });
  };
};

export const updateTaskItemAction = (task_id, taskChanges) => {
  return (dispatch) => {
    dispatch(updateTask(task_id, taskChanges));
    return axios
      .put(`${routePrefix}${task_id}`, taskChanges)
      .then(() => {
        dispatch(addAlert(201, "Task edited!"));
      })
      .catch((err) => {
        dispatch(addAlert(err.status, "Task failed to delete!"));
      });
  };
};

export const deleteTaskItemAction = (task_id) => {
  return (dispatch) => {
    dispatch(deleteTask(task_id));
    return axios
      .delete(`${routePrefix}${task_id}`)
      .then(() => {
        dispatch(addAlert(201, "Task deleted!"));
      })
      .catch((err) => {
        dispatch(addAlert(err.status, "Task failed to delete!"));
      });
  };
};

export const completeTaskItemAction = (task_id, user_id) => {
  return (dispatch) => {
    dispatch(updateTask(task_id, { isDone: true }));
    return axios
      .put(`${routePrefix}${task_id}/complete`)
      .then((result) => {
        const { mangosEarned } = result.data;
        if (mangosEarned) {
          dispatch(addAlert(200, `You earned ${mangosEarned} mangos!`));
          return axios.put(`/users/${user_id}/taskComplete`, { mangosEarned });
        }
        return null;
      })
      .then((result) => {
        if (result) {
          dispatch(addAlert(200, `User stats updated!`));
        }
      })
      .catch((err) => {
        dispatch(addAlert(err.status, "Task failed to complete!"));
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

const createTask = (newTask) => {
  return {
    type: "TASK_CREATE",
    payload: newTask,
  };
};

const taskCreateSuccess = (tempID, newTask) => {
  return {
    type: "TASK_CREATE_SUCCESS",
    payload: {
      tempID,
      newTask,
    },
  };
};

export const updateTask = (task_id, taskChanges) => {
  return {
    type: "TASK_UPDATE",
    payload: {
      task_id,
      taskChanges,
    },
  };
};

const deleteTask = (task_id) => {
  return {
    type: "TASK_DELETE",
    payload: task_id,
  };
};
