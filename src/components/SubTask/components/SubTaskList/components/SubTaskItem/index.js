import { Component } from "react";
import * as React from "react";
import { connect } from "react-redux";
import { OverlayTrigger, Popover, Button } from "react-bootstrap";
import { THREEDOTS } from "assets/Icon";
import { deleteSubTaskAction, updateSubTaskAction } from "actions/subTask";
import "../../scroll.css";

class SubTaskItem extends Component {
  constructor(props) {
    super(props);
    const { subTask } = this.props;
    this.state = {
      isEditMode: false,
      title: subTask.description,
    };
    this.titleInput = React.createRef();
  }

  updateSubtaskStatus = (index, task, newSubTask) => {
    const { isDone, description } = newSubTask;
    const subTask = {
      description,
      isDone,
    };
    const updatedTask = task;
    updatedTask.subTasks[index] = subTask;
    return updatedTask;
  };

  changeState = (index, subtask, task) => {
    const newSubTask = {
      _id: subtask._id,
      description: subtask.description,
      isDone: !subtask.isDone,
    };

    // const { updateTask } = this.props;
    // const updatedTask = this.updateSubtaskStatus(index, task, newSubTask);

    const { updateSubTask } = this.props;
    const { _id } = task;
    updateSubTask(_id, subtask._id, newSubTask);

    // updateTask(updatedTask);
  };

  handleTitleInputChange = (event) => {
    this.setState({ title: event.target.value });
  };

  updateTaskTitle = (event) => {
    event.preventDefault();
    this.toggleEditMode();
    const { title } = this.state;
    const { task, updateTask } = this.props;
    const updatedTask = {
      ...task,
      title,
    };
    updateTask(updatedTask);
  };

  toggleEditMode = () => {
    const { isEditMode } = this.state;
    this.setState({ isEditMode: !isEditMode }, () => {
      const updatedIsEditMode = !isEditMode;
      if (updatedIsEditMode) {
        this.titleInput.focus();
      } else {
        this.titleInput.blur();
      }
    });
  };

  deleteSubTask = (index, subTasks, task) => {
    const { deleteSubTask } = this.props;
    const { _id } = task;
    deleteSubTask(_id, subTasks[index]._id);
  };

  render() {
    const {
      index,
      task,
      subTasks,
      subTask,
      Checked,
      unChecked,
      tasks,
    } = this.props;
    const { isEditMode, title } = this.state;
    return (
      <form
        className="task row bg-light mt-2 p-2 rounded align-items-center bg-light"
        onSubmit={this.updateTaskTitle}
        key={index}
      >
        <div className="container">
          <div className="row">
            <div className="col-2 d-flex border-left align-self-start justify-content-start rounded ">
              <span
                role="button"
                tabIndex={0}
                onClick={() => {
                  this.changeState(index, subTask, task, tasks);
                }}
                onKeyDown={() => {
                  this.changeState(index, subTask, task, tasks);
                }}
              >
                {subTask.isDone ? Checked : unChecked}
              </span>
            </div>
            <input
              className="title form-control shadow-none bg-light col-9 d-flex justify-content-left"
              type="text"
              ref={(input) => {
                this.titleInput = input;
              }}
              value={title}
              onChange={this.handleTitleInputChange}
              onBlur={this.updateTaskTitle}
              disabled={!isEditMode}
            />
            <div className="col d-flex border-left justify-content-center">
              <OverlayTrigger
                trigger="focus"
                placement="right"
                overlay={
                  <Popover id="popover-options">
                    <Popover.Content>
                      <Button
                        variant="light"
                        size="sm"
                        onClick={() => {
                          this.toggleEditMode(index);
                        }}
                        block="true"
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        className=""
                        onClick={() => {
                          this.deleteSubTask(index, subTasks, task);
                        }}
                        block="true"
                      >
                        Delete
                      </Button>
                    </Popover.Content>
                  </Popover>
                }
              >
                <button
                  type="button"
                  className="link-button btn btn-sm btn-light"
                >
                  {THREEDOTS}
                </button>
              </OverlayTrigger>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
const mapStateToProps = (state) => {
  return { tasks: state.tasks };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateSubTask: (taskID, subTaskID, newSubTask) =>
      dispatch(updateSubTaskAction(taskID, subTaskID, newSubTask)),
    deleteSubTask: (taskID, deletedSubTaskID) =>
      dispatch(deleteSubTaskAction(taskID, deletedSubTaskID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubTaskItem);
