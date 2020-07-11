import { v4 as uuidv4 } from "uuid";
import { TASKS } from "../data/DummyData";

const getTaskIndex = (taskID, tasks) => {
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].id === taskID) {
      return i;
    }
  }
  return null;
};

const replaceTask = (index, tasks, newTask) => {
  tasks.splice(index, 1, newTask);
  return [...tasks];
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
    subTasks: [],
    timestamp: new Date(),
  };
};

const updateTasks = (updatedTask, tasks) => {
  const taskIndex = getTaskIndex(updatedTask.id, tasks);
  let newTasks = tasks;
  if (taskIndex || taskIndex === 0) {
    const task = updatedTask;
    newTasks = replaceTask(taskIndex, newTasks, task);
  }
  return newTasks;
};

const tasksReducer = (tasks = TASKS, action) => {
  switch (action.type) {
    case "TASK_UPDATE": {
      return updateTasks(action.payload, tasks);
    }
    case "CREATE_TASK": {
      return [...tasks, createTask(action.payload)];
    }
    case "TASK_DELETE": {
      const taskIndex = getTaskIndex(action.payload, tasks);
      const newTasks = [...tasks];
      if (taskIndex || taskIndex === 0) {
        newTasks.splice(taskIndex, 1);
      }
      return newTasks;
    }
    default: {
      return tasks;
    }
  }
};

export default tasksReducer;
