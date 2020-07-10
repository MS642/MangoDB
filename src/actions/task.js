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
