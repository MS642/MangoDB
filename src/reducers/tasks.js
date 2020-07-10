const replaceTask = (index, tasks, newTask) => {
  tasks.splice(index, 1, newTask);
  return [...tasks];
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
