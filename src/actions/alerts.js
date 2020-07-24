import { AlertType } from "reducers/alertReducer";

export const addAlert = (status, content) => {
  return {
    type: "ADD_ALERT",
    status,
    content,
  };
};

export const addErrorAlert = () => {
  return addAlert(AlertType.ERROR, "Error occurred. Please refresh the page!");
};

export const deleteAlert = (alertID) => {
  return {
    type: "DELETE_ALERT",
    id: alertID,
  };
};
