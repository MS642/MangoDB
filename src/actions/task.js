import axios from "axios";
import { addAlert } from "actions/alerts";

// THUNK ACTIONS MAKING AXIOS CALLS
export const fetchTasksAction = (user_id) => {
  return (dispatch) => {
    return axios
      .get(`http://localhost:8080/tasks/${user_id}`)
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
    return axios
      .post(`http://localhost:8080/tasks/${user_id}`, newTask)
      .then(({ data }) => {
        dispatch(addAlert(200, "Task added!"));
        dispatch(createNewTask(data));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const updateTaskItemAction = (task_id, taskChanges) => {
  return (dispatch) => {
    return axios
      .put(`http://localhost:8080/tasks/${task_id}`, taskChanges)
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
      .delete(`http://localhost:8080/tasks/${task_id}`)
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
    type: "CREATE_TASK",
    payload: newTask,
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
