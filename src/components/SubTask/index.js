import React from "react";
import { connect } from "react-redux";
import SubTaskForm from "./components/SubTaskForm";
import SubTaskList from "./components/SubTaskList";

class SubTask extends React.Component {
  update = () => {
    this.forceUpdate();
  };

  render() {
    const { task } = this.props;
    const scrollContainerStyle = { maxHeight: "250px" };
    return (
      <div
        className="container bg-dark scrollbar scrollbar-warning mx-auto"
        style={scrollContainerStyle}
      >
        <SubTaskForm task={task} update={this.update} />
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
