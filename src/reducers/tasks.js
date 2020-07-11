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

const getSubTaskIndex = (subTask_id, subTasks) => {
  return subTasks.findIndex((subTask) => subTask.id === subTask_id);
};

const deleteSubTask = (task_id, subTask_id, tasks) => {
  console.log( tasks);
  console.log("=======");

  const taskIndex = getTaskIndex(task_id, tasks);
  const subTaskIndex = getSubTaskIndex(subTask_id, tasks[taskIndex].subTasks);

  let newTasks = tasks;
  let newSubTasks = newTasks[taskIndex].subTasks;
  newSubTasks.splice(subTaskIndex, 1);
  newTasks[taskIndex].subTasks = newSubTasks;
  console.log(newTasks);
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
    case "SUBTASK_CREATE": {
      const { task_id, newSubTask } = action.payload;
      return addSubTask(task_id, newSubTask, tasks);
    }
    case "SUBTASK_DELETE": {
      const { task_id, subTask_id } = action.payload;
      return deleteSubTask(task_id, subTask_id, tasks);
    }
    default: {
      return tasks;
    }
  }
};

export default tasksReducer;
