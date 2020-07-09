import { v4 as uuidv4 } from "uuid";

const getTaskIndex = (taskID, tasks) => {
  return tasks.findIndex((task) => {
    return task.id === taskID;
  });
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
  const { subTasks } = task;
  let sum = 0;
  subTasks.forEach((subTask) => {
    if (subTask.isDone) {
      sum += 1;
    }
  });

  return (sum / subTasks.length) * 100;
};

const updateSubtaskStatus = (tasks, newSubTask) => {
  const { id, isDone, description } = newSubTask;
  const subTask = {
    description,
    isDone,
  };
  const taskIndex = tasks.findIndex((task) => {
    return task.id === id;
  });
  const subTaskIndex = tasks[taskIndex].findIndex((task) => {
    return task.description === description;
  });
  const updatedTasks = tasks;
  updatedTasks[taskIndex].subTasks[subTaskIndex] = subTask;
  updatedTasks[taskIndex].subTaskProgress = getProgressPercentage(
    tasks[taskIndex]
  );
  return tasks;
};

const createSubTask = (tasks, newSubTask) => {
  const { id, description, isDone } = newSubTask;
  const subTask = {
    description,
    isDone,
  };
  const taskIndex = getTaskIndex(id, tasks);
  const updatedTasks = tasks;
  updatedTasks[taskIndex].subTasks = [...tasks[taskIndex].subTasks, subTask];
  updatedTasks[taskIndex].subTaskProgress = getProgressPercentage(
    tasks[taskIndex]
  );
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

const tasksReducer = (tasks = [], action) => {
  switch (action.type) {
    case "TASKS_SET": {
      return action.payload;
    }
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
    case "ADD_SUBTASK": {
      return createSubTask(tasks, action.payload);
    }
    case "UPDATE_SUBTASK": {
      return updateSubtaskStatus(tasks, action.payload);
    }
    default: {
      return tasks;
    }
  }
};

export default tasksReducer;
