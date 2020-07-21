import React from "react";
import { connect } from "react-redux";

/* progress bar */
import { updateTaskItemAction, fetchTasksAction } from "actions/task";
import TaskItem from "./components/TaskItem";

class TaskList extends React.Component {
  componentDidMount() {
    const { fetchTasks, userDB } = this.props;
    const { _id } = userDB;
    fetchTasks(_id);
  }

  shouldComponentUpdate(nextProps) {
    const { tasks } = this.props;
    return tasks !== nextProps.tasks;
  }

  stopEvent = (event) => {
    event.stopPropagation();
  };

  render() {
    const { tasks } = this.props;
    const tasksItems = [];
    tasks.forEach((task) => {
      const { _id } = task;
      tasksItems.push(
        <div className="task row mt-2 p-2 rounded align-items-center" key={_id}>
          <TaskItem key={task.id} task={task} />
        </div>
      );
    });
    return <div className="taskList">{tasksItems}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    userDB: state.userDB,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTasks: (user_id) => {
      dispatch(fetchTasksAction(user_id));
    },
    updateTask: (task) => dispatch(updateTaskItemAction(task)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
