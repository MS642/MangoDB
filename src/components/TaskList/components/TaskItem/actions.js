export const selectTaskItem = (taskID) => {
  return {
    type: "TASK_SELECT",
    payload: taskID,
  };
};

export const updateTaskItem = (task) => {
  return {
    type: "TASK_UPDATE",
    payload: task,
  };
};

export const deleteTaskItem = (taskID) => {
  return {
    type: "TASK_DELETE",
    payload: taskID,
  };
};
