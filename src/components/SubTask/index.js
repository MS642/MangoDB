import React from "react";
import { connect } from "react-redux";
import SubTaskForm from "./SubTaskForm";
import SubTaskList from "./SubTaskList";

class SubTask extends React.Component {
  update = () => {
    this.forceUpdate();
  };

  render() {
    const { task } = this.props;
    return (
      <div className="container bg-dark">
        <SubTaskForm
          task={task}
          update={this.update}
          className=" task row bg-light mt-2 p-2 rounded align-items-center"
        />
        <SubTaskList
          subTasks={task.subTasks}
          task={task}
          update={this.update}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { tasks: state.tasks };
};

export default connect(mapStateToProps)(SubTask);
