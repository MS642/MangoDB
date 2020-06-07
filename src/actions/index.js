export const placeholderAction = (payload) => {
  return {
    type: "PLACEHOLDER_ACTION",
    payload,
  };
};

export const addSubtask = (subtask) => {
  return {
    type: "ADD_SUBTASK",
    payload: subtask,
  };
};

export const selectTask = (id) => {
  return {
    type: "TASK_SELECTED",
    payload: id,
  };
};
