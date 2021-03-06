import { combineReducers } from "redux";
import alertReducer from "reducers/alertReducer";
import currentUserIDReducer from "reducers/currentUserIDReducer";
import tasksReducer from "./tasks";
import feedReducerDB from "./feedReducerDB";
import userProfileReducerDB from "./userProfileReducerDB";
import profileReducer from "./profileReducer";

export default combineReducers({
  tasks: tasksReducer,
  feedDB: feedReducerDB,
  userProfileDB: userProfileReducerDB,
  currentUserID: currentUserIDReducer,
  alerts: alertReducer,
  visitedProfile: profileReducer,
});
