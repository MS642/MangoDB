import { v4 as uuidv4 } from "uuid";
import { TASKS } from "../data/DummyData";

const getTaskIndex = (taskID, tasks) => {
  for (let i = 0; i < tasks.length; i++) {
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
    subTaskProgress: 0,
    timestamp: new Date(),
  };
};

const getProgressPercentage = (task) => {
  const subtasks = task.subTasks;
  let sum = 0;
  for (let i = 0; i < subtasks.length; i++) {
    if (subtasks[i].isDone) {
      sum++;
    }
  }
  return (sum / subtasks.length) * 100;
};

const getSubTaskIndex = (subTasks, description) => {
  for (let i = 0; i < subTasks.length; i++) {
    if (subTasks[i].description === description) {
      return i;
    }
  }
  return null;
};

const updateSubtaskStatus = (tasks, newSubTask) => {
  const { id, isDone, description } = newSubTask;
  const subTask = {
    description,
    isDone,
  };
  const taskIndex = getTaskIndex(id, tasks);
  const subTaskIndex = getSubTaskIndex(tasks[taskIndex].subTasks, description);
  tasks[taskIndex].subTasks[subTaskIndex] = subTask;
  tasks[taskIndex].subTaskProgress = getProgressPercentage(tasks[taskIndex]);
  return tasks;
};

const createSubTask = (tasks, newSubTask) => {
  const { id, description, isDone } = newSubTask;
  const subTask = {
    description,
    isDone,
  };
  const taskIndex = getTaskIndex(id, tasks);
  tasks[taskIndex].subTasks = [...tasks[taskIndex].subTasks, subTask];
  tasks[taskIndex].subTaskProgress = getProgressPercentage(tasks[taskIndex]);
  return tasks;
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
    case "CREATE_TASK":
      return [...tasks, createTask(action.payload)];
    case "TASK_DELETE":
      const taskIndex = getTaskIndex(action.payload, tasks);
      const newTasks = [...tasks];
      if (taskIndex || taskIndex === 0) {
        newTasks.splice(taskIndex, 1);
      }
      return newTasks;
    case "ADD_SUBTASK":
      return createSubTask(tasks, action.payload);
    case "UPDATE_SUBTASK":
      return updateSubtaskStatus(tasks, action.payload);
    default:
      return tasks;
  }
};

export default tasksReducer;
