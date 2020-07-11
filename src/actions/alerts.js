export const addAlert = (status, content) => {
  return {
    type: "ADD_ALERT",
    status,
    content,
  };
};

export const closeAlert = (alertID) => {
  return (dispatch) => {
    dispatch(hideAlert(alertID));

    setTimeout(() => {
      dispatch(deleteAlert(alertID));
    }, 1000);
  };
};

const hideAlert = (alertID) => {
  return {
    type: "HIDE_ALERT",
    id: alertID,
  };
};

const deleteAlert = (alertID) => {
  return {
    type: "DELETE_ALERT",
    id: alertID,
  };
};
