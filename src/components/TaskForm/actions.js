export const createNewTask = newTask => {
  return ({
    type: 'CREATE_TASK',
    payload: newTask 
  });
}