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

const replaceTask = (index, tasks, newTask) => {
  tasks.splice(index, 1, newTask);
  return [...tasks];
  // return [...tasks, newTask];
}

const tasksReducer = (tasks = TASKS, action) => {
  switch(action.type) {
    case "TOGGLE_COMPLETION": {
      let taskIndex = getTaskIndex(action.payload, tasks);
      let newTasks = tasks;
      if (taskIndex || taskIndex === 0) {
        let task = tasks[taskIndex];
        task.isDone = !task.isDone;
        newTasks = replaceTask(taskIndex, newTasks, task);
      }
      return newTasks; 
    }
    case "TOGGLE_PRIVACY": {
      let taskIndex = getTaskIndex(action.payload, tasks);
      let newTasks = tasks;
      if (taskIndex || taskIndex === 0) {
        let task = tasks[taskIndex];
        task.isPublic = !task.isPublic;
        newTasks = replaceTask(taskIndex, newTasks, task);
      }
      return newTasks;
    }
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