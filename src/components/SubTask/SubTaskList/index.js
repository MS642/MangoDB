import { Component } from "react";
import * as React from "react";
import { connect } from "react-redux";
import { updateTaskItem} from "../../TaskList/components/TaskItem/actions";

class SubTaskList extends Component {
  
  getSubTaskIndex = (subTasks, description) => {
    for (let i = 0; i < subTasks.length; i++) {
      if (subTasks[i].description === description) {
        return i;
      }
    }
    return null;
  };
  
 updateSubtaskStatus = (task, newSubTask) => {
    const {id, isDone, description} = newSubTask;
    const subTask = {
      description,
      isDone,
    }
    const subTaskIndex = this.getSubTaskIndex(task.subTasks, description);
    task.subTasks[subTaskIndex] = subTask;
    return  task;
  }

  changeState = (subtask, task) => {
    const newSubTask = {
      id: task.id,
      description: subtask.description,
      isDone: !subtask.isDone,
    };

    const { updateTask } = this.props;
    task = this.updateSubtaskStatus(task, newSubTask);
    updateTask(task);
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
        className="subTask row bg-light mt-2 p-2 rounded align-items-center"
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
    updateTask: (task) => dispatch(updateTaskItem(task)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubTaskList);
