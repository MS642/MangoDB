import { TASKS } from '../components/Task/DummyData';

const getTaskIndex = (taskID, tasks) => {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id == taskID) {
      return i;
    }
  }
  return null; 
};

const printTasks = (tasks) => {
  for (let task of tasks) {
    console.log(`TaskID: ${task.id}, title: ${task.title}, isDone: ${task.isDone}`);
  }
}

const tasksReducer = (tasks = TASKS, action) => {
  switch(action.type) {
    case "TOGGLE_COMPLETION":
      let taskIndex = getTaskIndex(action.payload, tasks);
      console.log(taskIndex);
      let newTasks = tasks;
      if (taskIndex) {
        let task = tasks[taskIndex];
        // printTasks(newTasks);
        task.isDone = !task.isDone;
        newTasks.splice(taskIndex, 1);
        newTasks = [...newTasks, task];
        // console.log(`found task: ${task}, index: ${taskIndex}, newList: ${newTasks.length}`);
      }
      return newTasks; 
      /// eehhh  use a manual for loop to search for item, get the index, use splice to remove it and the bleh
    case "TOGGLE_PRIVACY":
      // if (task) {
      //   task.isPublic = !task.isPublic;
      // }
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