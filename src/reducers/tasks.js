import { v4 as uuidv4 } from "uuid";
import { TASKS } from "../components/TaskList/components/Task/DummyData";

const getTaskIndex = (taskID, tasks) => {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === taskID) {
      return i;
    }
  }
  return null;
};

const printTasks = (tasks) => {
  for (const task of tasks) {
    console.log(
      `TaskID: ${task.id}, title: ${task.title}, isDone: ${task.isDone}`
    );
  }
};

const replaceTask = (index, tasks, newTask) => {
  tasks.splice(index, 1, newTask);
  return [...tasks];
  // return [...tasks, newTask];
};

const createTask = (newTask) => {
  const { title, isPublic } = newTask;
  return {
    id: uuidv4(),
    title,
    givenClaps: [],
    mangoTransactions: [],
    dueDate: null,
    isDone: false,
    isPublic,
    timestamp: new Date(),
  };
};

const updateTasks = (taskId, changeTask, tasks) => {
  const taskIndex = getTaskIndex(taskId, tasks);
  let newTasks = tasks;
  if (taskIndex || taskIndex === 0) {
    const task = changeTask(tasks[taskIndex]);
    newTasks = replaceTask(taskIndex, newTasks, task);
  }
  return newTasks;
};

const tasksReducer = (tasks = TASKS, action) => {
  switch (action.type) {
    case "TOGGLE_COMPLETION": {
      return updateTasks(
        action.payload,
        (task) => {
          task.isDone = !task.isDone;
          return task;
        },
        tasks
      );
    }
    case "TOGGLE_PRIVACY": {
      return updateTasks(
        action.payload,
        (task) => {
          task.isPublic = !task.isPublic;
          return task;
        },
        tasks
      );
    }
    case "CREATE_TASK":
      return [...tasks, createTask(action.payload)];
    case "UPDATE_TASK_TITLE":
      const updatedTask = action.payload;
      return updateTasks(
        updatedTask.id,
        (task) => {
          task.title = updatedTask.title;
          return task;
        },
        tasks
      )
    case "UPDATE_TASK_DATE":
      const newTask = action.payload;
      console.log(newTask);
      return updateTasks(
        newTask.id,
        task => {
          task.dueDate = newTask.dueDate; 
          return task; 
        },
        tasks
      )
      return tasks;
    case "DELETE_TASK":
      const taskIndex = getTaskIndex(action.payload, tasks);
      const newTasks = [...tasks];
      if (taskIndex || taskIndex === 0) {
        newTasks.splice(taskIndex, 1);
      }
      return newTasks;
    default:
      return tasks;
  }
};

export default tasksReducer;
