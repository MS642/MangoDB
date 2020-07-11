import { combineReducers } from "redux";
import alertReducer from "reducers/alertReducer";
import tasksReducer from "./tasks";
import feedReducerDB from "./feedReducerDB";
import userReducer from "./userReducer";
import userProfileReducerDB from "./userProfileReducerDB";
import currentUserReducer from "./currentUserReducer";

export default combineReducers({
  tasks: tasksReducer,
  feedDB: feedReducerDB,
  userProfileDB: userProfileReducerDB,
  user: userReducer,
  userDB: currentUserReducer,
  alerts: alertReducer,
});
