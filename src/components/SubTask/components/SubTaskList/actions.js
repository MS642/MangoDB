const updateSubtask = (subtask) => {
  return {
    type: "UPDATE_SUBTASK",
    payload: subtask,
  };
};

export default updateSubtask;
