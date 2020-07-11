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
        variant: mapVariant(action.status),
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

const mapVariant = (status) => {
  switch (status) {
    case 200:
      return "success";
    case 201:
      return "dark";
    case 400:
    case 503:
      return "danger";
    case 404:
      return "warning";
    default:
      return "info";
  }
};

export default currentUserReducer;
