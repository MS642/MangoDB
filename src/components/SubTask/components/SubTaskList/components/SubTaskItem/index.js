import { Component } from "react";
import * as React from "react";
import { connect } from "react-redux";
import { OverlayTrigger, Popover, Button } from "react-bootstrap";
import { THREEDOTS } from "assets/Icon";
import { deleteSubTaskAction, updateSubTaskAction } from "actions/subTask";
import "../../SubTask.css";

class SubTaskItem extends Component {
  constructor(props) {
    super(props);
    const { subTask } = this.props;
    this.state = {
      isEditMode: false,
      description: subTask.description,
    };
    this.descriptionInput = React.createRef();
  }

  changeState = (index, subtask, task) => {
    const newSubTask = {
      _id: subtask._id,
      description: subtask.description,
      isDone: !subtask.isDone,
    };
    const { updateSubTask } = this.props;
    const { _id } = task;
    updateSubTask(_id, subtask._id, newSubTask);
  };

  handleTitleInputChange = (event) => {
    this.setState({ description: event.target.value });
  };

  updateTaskTitle = (event) => {
    event.preventDefault();
    this.toggleEditMode();
    const { description } = this.state;
    const { updateSubTask, subTask, task } = this.props;
    const newSubTask = {
      _id: subTask._id,
      description,
      isDone: subTask.isDone,
    };
    const { _id } = task;
    updateSubTask(_id, subTask._id, newSubTask);
  };

  toggleEditMode = () => {
    const { isEditMode } = this.state;
    const { subTask } = this.props;
    if (!subTask.isDone) {
      this.setState({ isEditMode: !isEditMode }, () => {
        const updatedIsEditMode = !isEditMode;
        if (updatedIsEditMode) {
          this.descriptionInput.focus();
        } else {
          this.descriptionInput.blur();
        }
      });
    }
  };

  deleteSubTask = (index, subTasks, task) => {
    const { deleteSubTask } = this.props;
    const { _id } = task;
    deleteSubTask(_id, subTasks[index]._id);
  };

  render() {
    const { index, task, subTasks, subTask, tasks } = this.props;
    const { isEditMode, description } = this.state;
    const { isDone } = subTask;
    return (
      <form
        className={
          isDone
            ? "row subTask-done mt-2 p-2 rounded align-items-center bg-light"
            : "row bg-light mt-2 p-2 rounded align-items-center bg-light"
        }
        onSubmit={this.updateTaskTitle}
        key={index}
      >
        <div className="col-1 pr-0 mr-4 pl-1 pl-sm-3 mr-sm-0 d-flex border-left align-self-start justify-content-start rounded">
          <button
            type="button"
            tabIndex={0}
            onClick={() => {
              this.changeState(index, subTask, task, tasks);
            }}
            onKeyDown={() => {
              this.changeState(index, subTask, task, tasks);
            }}
          >
            {isDone ? (
              <i className="material-icons">check_circle</i>
            ) : (
              <i className="material-icons">radio_button_unchecked</i>
            )}
          </button>
        </div>
        {isDone ? (
          <s className="title col-8 col-sm-9 form-control shadow-none bg-light d-flex justify-content-left">
            {description}
          </s>
        ) : (
          <input
            className="title col-8 col-sm-9 form-control shadow-none bg-light d-flex justify-content-left"
            type="text"
            ref={(input) => {
              this.descriptionInput = input;
            }}
            value={description}
            onChange={this.handleTitleInputChange}
            onBlur={this.updateTaskTitle}
            disabled={!isEditMode}
          />
        )}
        <div className="col-1 d-flex border-left justify-content-center">
          <OverlayTrigger
            trigger="focus"
            placement="right"
            overlay={
              <Popover id="popover-options">
                <Popover.Content>
                  {isDone ? (
                    <Button disabled variant="light" size="sm" block="true">
                      <s>Edit</s>
                    </Button>
                  ) : (
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
                  )}
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
            <button type="button" className="link-button btn btn-sm btn-light">
              {THREEDOTS}
            </button>
          </OverlayTrigger>
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
