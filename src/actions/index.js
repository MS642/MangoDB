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

export const feedData = (data) => {
  return {
    type: "FEED_DATA",
    payload: data,
  };
};

export const addClap = (id) => {
  return {
    type: "ADD_CLAP",
    payload: id,
  };
};
