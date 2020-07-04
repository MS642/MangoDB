import { Component } from "react";
import * as React from "react";
import { connect } from "react-redux";
import updateSubtaskA from "./actions";

class SubTaskList extends Component {
  changeState = (subtask, task) => {
    const payload = {
      id: task.id,
      description: subtask.description,
      isDone: !subtask.isDone,
    };

    const { updateSubtask, update } = this.props;
    updateSubtask(payload);
    update();
    this.forceUpdate();
  };

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

    return subTasks.map((subtask) => {
      return (
        <div
          className=" task row bg-light mt-2 p-2 rounded align-items-center h-50"
          key={subtask.description + task}
        >
          <div className="container">
            <div className="row">
              <div className="col-2 d-flex border-left align-self-start justify-content-start rounded ">
                <span
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    this.changeState(subtask, task, tasks);
                  }}
                  onKeyDown={() => {
                    this.changeState(subtask, task, tasks);
                  }}
                >
                  {subtask.isDone ? Checked : unChecked}
                </span>
              </div>
              <div className="col-10 d-flex border-left align-self-start justify-content-start rounded ">
                {subtask.description}
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="container">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { tasks: state.tasks };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateSubtask: (newSubTask) => dispatch(updateSubtaskA(newSubTask)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubTaskList);
