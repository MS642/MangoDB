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

export const deleteSubTaskAction = (task_id, subtask_id) => {
  // add dispatch here later
  return () => {
    return axios
      .delete(`http://localhost:8080/tasks/${task_id}/subTasks/${subtask_id}`)
      .then(() => {
        // TODO: had to write another function so eslint woulnd't complain about only one exported function
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
