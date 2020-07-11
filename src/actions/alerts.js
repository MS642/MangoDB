export const addAlert = (status, content) => {
  return {
    type: "ADD_ALERT",
    status,
    content,
  };
};

export const deleteAlert = (alertID) => {
  return {
    type: "DELETE_ALERT",
    id: alertID,
  };
};
