import React from "react";
import { connect } from "react-redux";
import TaskItem from "./components/TaskItem";

class TaskList extends React.Component {
  render() {
    const tasks = [];
    for (const task of this.props.tasks) {
      tasks.push(
        <TaskItem
          key={task.id}
          task={task}
          openSubTasks={this.props.openSubTasks}
          updateTasks={this.props.updateTasks}
        />
      );
    }
    return <div className="taskList">{tasks}</div>;
  }
}

const mapStateToProps = (state) => {
  return { tasks: state.tasks };
};

export default connect(mapStateToProps)(TaskList);
