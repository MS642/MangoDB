import { combineReducers } from "redux";
import tasksReducer from "./tasks";
import feedReducer from "./feedReducers";

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
});
