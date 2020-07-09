import { combineReducers } from "redux";
import tasksReducer from "./tasks";
import feedReducer from "./feedReducer";
import feedReducerDB from "./feedReducerDB";
import userReducer from "./userReducer";
import userProfileReducer from "./userProfileReducer";
import userProfileReducerDB from "./userProfileReducerDB";
import currentUserReducer from "./currentUserReducer";


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
  feedDB: feedReducerDB,
  userProfileDB: userProfileReducerDB,
  user: userReducer,
  userDB: currentUserReducer,
});
