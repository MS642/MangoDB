import { v4 as uuidv4 } from "uuid";

const initialAlerts = [
  {
    id: uuidv4(),
    content: "Success message content",
    variant: "success",
    show: true,
  },
  {
    id: uuidv4(),
    content: "Danger message content",
    variant: "danger",
    show: true,
  },
];

const currentUserReducer = (alerts = initialAlerts, action) => {
  let newAlerts = [...alerts];
  let newAlert = {};
  switch (action.type) {
    case "ADD_ALERT":
      newAlert = {
        id: uuidv4(),
        content: action.content,
        variant: mapVariant(action.status),
        show: true,
      };
      newAlerts.push(newAlert);
      return newAlerts;
    case "HIDE_ALERT":
      newAlert = newAlerts.find((alert) => alert.id === action.id);
      newAlert.show = false;
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
    case 400:
      return "danger";
    case 404:
      return "warning";
    default:
      return "info";
  }
};

export default currentUserReducer;
