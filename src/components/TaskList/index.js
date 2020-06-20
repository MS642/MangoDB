import React from "react";
import { connect } from "react-redux";
import TaskItem from "./components/TaskItem";

class TaskList extends React.Component {
  render() {
    const { tasks, openSubTasks, updateTasks } = this.props;
    const tasksItems = [];
    tasks.forEach((task) => {
      tasksItems.push(
        <TaskItem
          key={task.id}
          task={task}
          openSubTasks={openSubTasks}
          updateTasks={updateTasks}
        />
      );
    });
    return <div className="taskList">{tasksItems}</div>;
  }
}

const mapStateToProps = (state) => {
  const { tasks } = state;
  return { tasks };
};

export default connect(mapStateToProps)(TaskList);
