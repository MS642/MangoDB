import { TASKS } from '../components/Task/DummyData';

const tasksReducer = (tasks = TASKS, action) => {
  switch(action.type) {
    case "TOGGLE_COMPLETION":
      return tasks;
    case "TOGGLE_PUBLIC":
      return tasks;
    case "ADD_TASK":
      break;
      return tasks;
    case "EDIT_TITLE":
      return tasks;
    case "EDIT_DUE_DATE":
      return tasks;
    default:
      return tasks;
  }
}

export default tasksReducer;