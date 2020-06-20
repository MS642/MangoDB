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

export const addClap = (info) => {
  return {
    type: "ADD_CLAP",
    payload: info,
  };
};

export const addMango = (info) => {
  return {
    type: "ADD_MANGO",
    payload: info,
  };
};

export const getUserProfile = (userID) => {
  return {
    type: "GET_USER_PROFILE",
    payload: userID,
  };
};
