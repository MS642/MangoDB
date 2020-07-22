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
      ...newTasks[taskIndex],
      ...taskChanges,
    };
    newTasks = replaceTask(taskIndex, newTasks, updatedTask);
  }
  return newTasks;
};

const addSubTask = (task_id, newSubTask, tasks) => {
  const taskIndex = getTaskIndex(task_id, tasks);
  const newTasks = [...tasks];
  if (taskIndex !== -1) {
    const newTask = {
      ...newTasks[taskIndex],
    };
    newTask.subTasks.push(newSubTask);
  }
  return newTasks;
};

const getSubTaskIndex = (subTaskID, subTasks) => {
  return subTasks.findIndex((subTask) => subTask._id === subTaskID);
};

const updateSubtask = (taskID, subTaskID, newSubTask, tasks) => {
  const taskIndex = getTaskIndex(taskID, tasks);
  const subTaskIndex = getSubTaskIndex(subTaskID, tasks[taskIndex].subTasks);
  const newTasks = [...tasks];
  if (subTaskIndex !== -1) {
    newTasks[taskIndex].subTasks[subTaskIndex] = newSubTask;
  }
  return newTasks;
};

const deleteSubTask = (taskID, subTaskID, tasks) => {
  const taskIndex = getTaskIndex(taskID, tasks);
  const subTaskIndex = getSubTaskIndex(subTaskID, tasks[taskIndex].subTasks);
  const newTasks = [...tasks];
  const newSubTasks = newTasks[taskIndex].subTasks;

  if (subTaskIndex !== -1) {
    newSubTasks.splice(subTaskIndex, 1);
  }
  newTasks[taskIndex].subTasks = newSubTasks;
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
    case "TASK_CREATE": {
      const newTask = action.payload;
      newTask.isConfirmed = false;
      return [newTask, ...tasks];
    }
    case "TASK_CREATE_SUCCESS": {
      const { tempID, newTask } = action.payload;
      const newTasks = [...tasks];
      const taskIndex = getTaskIndex(tempID, newTasks);
      const updatedTask = {
        ...newTask,
        isConfirmed: true,
      };
      newTasks[taskIndex] = updatedTask;
      return newTasks;
    }
    case "TASK_CREATE_FAIL": {
      const { tempID } = action.payload;
      const newTasks = [...tasks];
      const taskIndex = getTaskIndex(tempID, newTasks);
      const updatedTask = {
        ...tasks[taskIndex],
        isFailed: true,
      };
      newTasks[taskIndex] = updatedTask;
      return action.payload;
    }
    case "TASK_DELETE": {
      const taskIndex = getTaskIndex(action.payload, tasks);
      const newTasks = [...tasks];
      if (taskIndex !== -1) {
        newTasks.splice(taskIndex, 1);
      }
      return newTasks;
    }
    case "SUBTASK_CREATE": {
      const { taskID, newSubTask } = action.payload;
      return addSubTask(taskID, newSubTask, tasks);
    }
    case "SUBTASK_UPDATE": {
      const { taskID, subTaskID, newSubTask } = action.payload;
      return updateSubtask(taskID, subTaskID, newSubTask, tasks);
    }
    case "SUBTASK_DELETE": {
      const { taskID, subTaskID } = action.payload;
      return deleteSubTask(taskID, subTaskID, tasks);
    }
    default: {
      return tasks;
    }
  }
};

export default tasksReducer;
