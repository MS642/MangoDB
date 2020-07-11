import { combineReducers } from "redux";
import alertReducer from "reducers/alertReducer";
import tasksReducer from "./tasks";
import feedReducer from "./feedReducer";
import currentUserReducer from "./currentUserReducer";
import userProfileReducer from "./userProfileReducer";

// Message Reducers & Helpers

const initialTest = {
  test: "test",
};

const testReducer = (test = initialTest, action) => {
  let newTest = [test]; // Make sure it's a new copy
  switch (action.type) {
    case "PLACEHOLDER_ACTION":
      newTest = {
        test: "newTest",
      };

      return newTest;
    default:
      return test;
  }
};

export default combineReducers({
  test: testReducer,
  tasks: tasksReducer,
  feed: feedReducer,
  userProfile: userProfileReducer,
  user: currentUserReducer,
  alerts: alertReducer,
});
