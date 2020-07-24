import { v4 as uuidv4 } from "uuid";

const initialAlerts = [];

const currentUserReducer = (alerts = initialAlerts, action) => {
  let newAlerts = [...alerts];
  let newAlert = {};
  switch (action.type) {
    case "ADD_ALERT":
      newAlert = {
        id: uuidv4(),
        content: action.content,
        variant: action.status,
      };
      newAlerts.push(newAlert);
      return newAlerts;
    case "DELETE_ALERT":
      newAlerts = alerts.filter((alert) => alert.id !== action.id);
      return newAlerts;
    default:
      return alerts;
  }
};

export const AlertType = {
  SUCCESS: "success",
  DARK: "dark",
  ERROR: "danger",
  WARNING: "warning",
  NORMAL: "info",
};

export default currentUserReducer;
