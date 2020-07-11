const replaceTask = (index, tasks, newTask) => {
  tasks.splice(index, 1, newTask);
  return [...tasks];
};

const getTaskIndex = (task_id, tasks) => {
  return tasks.findIndex((task) => task._id === task_id);
};

const updateTasks = (task_id, taskChanges, tasks) => {
  const taskIndex = getTaskIndex(task_id, tasks);
  let newTasks = tasks;
  if (taskIndex !== -1) {
    const updatedTask = {
      ...tasks[taskIndex],
      ...taskChanges,
    };
    newTasks = replaceTask(taskIndex, newTasks, updatedTask);
  }
  return newTasks;
};

const tasksReducer = (tasks = [], action) => {
  switch (action.type) {
    case "TASKS_SET": {
      return action.payload;
    }
    case "TASK_UPDATE": {
      const { task_id, taskChanges } = action.payload;
      return updateTasks(task_id, taskChanges, tasks);
    }
    case "CREATE_TASK": {
      return [...tasks, action.payload];
    }
    case "TASK_DELETE": {
      const taskIndex = getTaskIndex(action.payload, tasks);
      const newTasks = [...tasks];
      if (taskIndex !== -1) {
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
