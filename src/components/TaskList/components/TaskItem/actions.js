export const selectTask = (taskID) => {
  return {
    type: "TASK_SELECT",
    payload: taskID,
  };
};

export const updateTask = task => {
  return { 
    type: "TASK_UPDATE",
    payload: task
  }
}

export const deleteTask = (taskID) => {
  return {
    type: "TASK_DELETE",
    payload: taskID,
  };
};
