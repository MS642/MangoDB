import { Component } from "react";
import * as React from "react";
import { connect } from "react-redux";
import { updateTaskItemAction } from "actions/task";
import SubTaskItem from "./components/SubTaskItem";
import "./SubTask.css";

class SubTaskList extends Component {
  renderList() {
    const { tasks, task, subTasks } = this.props;
    let index = -1;
    if (subTasks) {
      return subTasks.map((subTask) => {
        const indexCurr = index + 1;
        index += 1;
        return (
          <div key={subTask._id}>
            <SubTaskItem
              task={task}
              tasks={tasks}
              subTasks={subTasks}
              subTask={subTask}
              index={indexCurr}
            />
          </div>
        );
      });
    }
    return <div />;
  }

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { tasks: state.tasks };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateTask: (task) => dispatch(updateTaskItemAction(task)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubTaskList);
