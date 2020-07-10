import { Component } from "react";
import * as React from "react";
import { connect } from "react-redux";
import SubTaskItem from "./components/subTaskItem";
import { updateTaskItem } from "../../../TaskList/components/TaskItem/actions";
import "./scroll.css";

class SubTaskList extends Component {
  renderList() {
    const unChecked = (
      <img
        className=" rounded float-left"
        width="30px"
        height="30px"
        src="/untick.svg"
        alt="tick sign"
      />
    );
    const Checked = (
      <img
        className=" rounded float-left"
        width="30px"
        height="30px"
        src="/tick.svg"
        alt="tick sign"
      />
    );

    const { tasks, task, subTasks } = this.props;
    let index = -1;
    return subTasks.map((subTask) => {
      const indexCurr = index + 1;
      index += 1;
      return (
        <div key={indexCurr + subTasks.length + subTask.description}>
          <SubTaskItem
            task={task}
            tasks={tasks}
            subTasks={subTasks}
            subTask={subTask}
            index={indexCurr}
            Checked={Checked}
            unChecked={unChecked}
          />
        </div>
      );
    });
  }

  render() {
    const scrollContainerStyle = { maxHeight: "250px" };
    return (
      <div
        className="container scrollbar scrollbar-warning mx-auto"
        style={scrollContainerStyle}
      >
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { tasks: state.tasks };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateTask: (task) => dispatch(updateTaskItem(task)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubTaskList);
