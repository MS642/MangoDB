import React from "react";
import { connect } from "react-redux";
import "./TaskList.css";

import TaskItem from "./components/TaskItem";

class TaskList extends React.Component {
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

export default connect(null)(TaskList);
