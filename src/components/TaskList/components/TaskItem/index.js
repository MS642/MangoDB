import * as React from "react";
import { connect } from "react-redux";
import {
  PUBLICEYE,
  PRIVATEEYE,
  THUMBSUP,
  EMPTYCIRCLE,
  FILLEDCHECKEDCIRCLE,
  THREEDOTS,
} from "assets/Icon";
import { OverlayTrigger, Popover, Button } from "react-bootstrap";
import Calendar from "./components/Calendar";
import { updateTaskItem, selectTaskItem, deleteTaskItem } from "./actions";
import "./index.scss";

class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    const { task } = this.props;
    const { description } = task;
    this.state = {
      descInputValue: description,
      isEditMode: false,
    };
    this.descInput = React.createRef();
  }

  handleDescInputChange = (event) => {
    this.setState({ descInputValue: event.target.value });
  };

  // TODO: properly implement later
  handleKeyDown = (event) => {
    return event.key === "Enter" ? "Enter" : "Not Enter";
  };

  toggleCompletion = () => {
    const { task, updateTask } = this.props;
    const updatedTask = { ...task, isDone: !task.isDone };
    updateTask(updatedTask);
  };

  togglePrivacy = () => {
    const { task, updateTask } = this.props;
    const updatedTask = { ...task, isPublic: !task.isPublic };
    updateTask(updatedTask);
  };

  toggleEditMode = () => {
    const { isEditMode } = this.state;
    this.setState({ isEditMode: !isEditMode }, () => {
      const { isEditMode: updatedIsEditMode } = this.state;
      if (updatedIsEditMode) {
        this.descInput.focus();
      } else {
        this.descInput.blur();
      }
    });
  };

  selectTask = () => {
    const { selectTask, task } = this.props;
    selectTask(task);
  };

  countMangoDonations = () => {
    const { task } = this.props;
    const { mangoTransactions } = task;
    return mangoTransactions.reduce((acc, curr) => {
      return acc + curr.mangoAmount;
    }, 0);
  };

  updateModal = () => {
    const { updateTasks, openSubTasks, task } = this.props;
    openSubTasks();
    return updateTasks(task);
  };

  updateTaskDescription = (event) => {
    event.preventDefault();
    this.toggleEditMode();
    const { descInputValue } = this.state;
    const { task, updateTask } = this.props;
    const updatedTask = {
      ...task,
      description: descInputValue,
    };
    updateTask(updatedTask);
  };

  updateDueDate = (dueDate) => {
    const { updateTask, task } = this.props;
    const updatedTask = { ...task, dueDate };
    updateTask(updatedTask);
  };

  deleteTask = () => {
    const { deleteTask, task } = this.props;
    deleteTask(task.id);
  };

  render() {
    const { task } = this.props;
    const { givenClaps, isPublic, isDone, dueDate } = task;
    const { descInputValue, isEditMode } = this.state;
    const popoverRight = (
      <Popover id="popover-options">
        <Popover.Content>
          <Button
            variant="light"
            size="sm"
            onClick={this.toggleEditMode}
            block="true"
          >
            Edit
          </Button>
          <Button
            variant="danger"
            size="sm"
            className=""
            onClick={this.deleteTask}
            block="true"
          >
            Delete
          </Button>
        </Popover.Content>
      </Popover>
    );

    return (
      <form
        className="task row mt-2 p-2 rounded align-items-center bg-light"
        onSubmit={this.updateTaskDescription}
      >
        <div className="col-1 d-flex justify-content-left">
          <button
            className="cursor-pointer"
            onClick={this.toggleCompletion}
            type="button"
          >
            {isDone ? FILLEDCHECKEDCIRCLE : EMPTYCIRCLE}
          </button>
        </div>
        <input
          className="title form-control shadow-none bg-light col-5 d-flex justify-content-left"
          type="text"
          ref={(input) => {
            this.descriptionInput = input;
          }}
          value={descInputValue}
          onChange={this.handleDescInputChange}
          onBlur={this.updateTaskDescription}
          disabled={!isEditMode}
        />
        <div className="col-1 d-flex border-left justify-content-center">
          <div className="align-middle">{THUMBSUP}</div>
          <div className="givenClaps">{givenClaps.length}</div>{" "}
        </div>
        <div className="col-1 d-flex border-left justify-content-center">
          <img className="w-25" src="/potato_mango.png" alt="mango" />
          <div className="mangosDonated">{this.countMangoDonations()}</div>
        </div>
        <div className="col-2 d-flex border-left justify-content-center">
          <button className="cursor-pointer calendar" type="button">
            <Calendar dueDate={dueDate} handleDateChange={this.updateDueDate} />
          </button>
        </div>
        <div className="col-1 d-flex border-left justify-content-center">
          <button
            className="cursor-pointer"
            onClick={this.togglePrivacy}
            type="button"
          >
            {isPublic ? PUBLICEYE : PRIVATEEYE}
          </button>
        </div>
        <div className="col-1 d-flex border-left justify-content-center">
          <OverlayTrigger
            trigger="focus"
            placement="right"
            overlay={popoverRight}
          >
            <a
              href="#editMode"
              tabIndex={0}
              className="btn btn-sm btn-light"
              role="button"
              type="button"
            >
              {THREEDOTS}
            </a>
          </OverlayTrigger>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectTask: (taskObj) => dispatch(selectTaskItem(taskObj)),
    deleteTask: (taskID) => dispatch(deleteTaskItem(taskID)),
    updateTask: (task) => dispatch(updateTaskItem(task)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
