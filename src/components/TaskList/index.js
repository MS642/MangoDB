import React from "react";
import { connect } from "react-redux";
import "./TaskList.css";

// import { updateTaskItemAction, fetchTasksAction } from "actions/task";
import TaskItem from "./components/TaskItem";

class TaskList extends React.Component {
  // componentDidMount() {
  //   const { fetchTasks, userProfileDB } = this.props;
  //   const { _id } = userProfileDB;
  //   fetchTasks(_id);
  // }

  // shouldComponentUpdate(nextProps) {
  //   const { tasks } = this.props;
  //   return tasks !== nextProps.tasks;
  // }

  render() {
    const { tasks } = this.props;
    const tasksItems = [];
    tasks.forEach((task) => {
      const { _id } = task;
      tasksItems.push(<TaskItem key={_id} task={task} />);
    });
    return <div className="taskList">{tasksItems}</div>;
  }
}

// const mapStateToProps = (state) => {
//   return {
//     tasks: state.tasks,
//     userProfileDB: state.userProfileDB,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchTasks: (user_id) => {
//       dispatch(fetchTasksAction(user_id));
//     },
//     updateTask: (task) => dispatch(updateTaskItemAction(task)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
export default connect(null)(TaskList);
