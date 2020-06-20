export const toggleCompletion = (taskID) => {
  return {
    type: "TOGGLE_COMPLETION",
    payload: taskID,
  };
};

export const togglePrivacy = (taskID) => {
  return {
    type: "TOGGLE_PRIVACY",
    payload: taskID,
  };
};

export const selectTask = (taskID) => {
  return {
    type: "TASK_SELECTED",
    payload: taskID,
  };
};

export const updateTaskTitle = (task) => {
  return {
    type: "UPDATE_TASK_TITLE",
    payload: task,
  };
};

export const updateTaskDate = (task) => {
  return { 
    type: "UPDATE_TASK_DATE",
    payload: task
  }
}

export const deleteTask = (taskID) => {
  return {
    type: "DELETE_TASK",
    payload: taskID,
  };
};
