export const updateSubtask = (subtask) => {
  return {
    type: "UPDATE_SUBTASK",
    payload: subtask,
  };
};
