export const addSubtask = (subtask) => {
  return {
    type: "ADD_SUBTASK",
    payload: subtask,
  };
};
