import axios from "axios";

export const createSubTaskAction = (task_id, newSubTask) => {
  return (dispatch) => {
    return axios
      .post(`http://localhost:8080/tasks/${task_id}/subTasks`, newSubTask)
      .then(({ data }) => {
        dispatch(createSubTask(task_id, data));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const deleteSubTaskAction = (task_id, subTask_id) => {
  // add dispatch here later
  return (dispatch) => {
    return axios
      .delete(`http://localhost:8080/tasks/${task_id}/subTasks/${subTask_id}`)
      .then(() => {
        dispatch(deleteSubTaskItem(task_id, subTask_id));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

const createSubTask = (task_id, newSubTask) => {
  return {
    type: "SUBTASK_CREATE",
    payload: {
      task_id,
      newSubTask,
    },
  };
};

const deleteSubTaskItem = (task_id, subTask_id) => {
  console.log("action delete");
  return {
    type: "SUBTASK_DELETE",
    payload: {
      task_id,
      subTask_id,
    },
  };
};
