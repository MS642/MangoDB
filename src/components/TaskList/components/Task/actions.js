export const toggleCompletion = (taskID) => {
  return {
    type: "TOGGLE_COMPLETION",
    payload: taskID
  };
}

export const togglePrivacy = (taskID) => {
  return {
    type: "TOGGLE_PRIVACY",
    payload: taskID
  };
}