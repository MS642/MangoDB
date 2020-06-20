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
import { OverlayTrigger, Popover } from "react-bootstrap";
import Calendar from "./components/Calendar";

import { updateTaskItem, selectTaskItem, deleteTaskItem } from "./actions";

class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    const { title, dueDate } = this.props.task;
    this.state = {
      titleInputValue: title,
      title,
      dueDate,
      isEditMode: false,
    };
    this.titleInput = React.createRef();
  }

  handleTitleInputChange = (event) => {
    this.setState({ titleInputValue: event.target.value });
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
      const updatedIsEditMode = this.state.isEditMode; 
      if (updatedIsEditMode) {
        this.titleInput.focus();
      } else {
        this.titleInput.blur();
      }
    });
  };

  selectTask = () => {
    const { selectTask, task } = this.props;
    selectTask(task);
  };

  countMangoDonations = () => {
    const { mangoTransactions } = this.props.task;
    return mangoTransactions.reduce((acc, curr) => {
      return acc + curr.mangoAmount;
    }, 0);
  };

  updateModal = () => {
    const v = this.props.updateTasks;
    this.props.openSubTasks();
    return v(this.props.task);
  };

  updateTaskTitle = (event) => {
    event.preventDefault();
    this.toggleEditMode();
    const { titleInputValue } = this.state;
    const { task, updateTask } = this.props;
    const updatedTask = {
      ...task,
      title: titleInputValue,
    };
    updateTask(updatedTask);
  };

  updateDueDate = (dueDate) => {
    const { updateTask } = this.props;
    const updatedTask = { ...this.props.task, dueDate };
    updateTask(updatedTask);
  };

  deleteTask = () => {
    const { deleteTask, task } = this.props;
    deleteTask(task.id);
  };

  render() {
    const { givenClaps, isPublic, isDone, dueDate } = this.props.task;
    const { titleInputValue, isEditMode } = this.state;
    const popoverRight = (
      <Popover id="popover-options">
        <Popover.Content>
          <div>
            <button onClick={this.toggleEditMode}>Edit</button>
          </div>
          <div>
            <button onClick={this.deleteTask}>Delete</button>
          </div>
        </Popover.Content>
      </Popover>
    );

    return (
      <form
        className="task row bg-light mt-2 p-2 rounded align-items-center"
        onSubmit={this.updateTaskTitle}
      >
        <div className="col-1 d-flex justify-content-left">
          <span role="button" tabIndex={0} onClick={this.toggleCompletion}>
            {isDone ? FILLEDCHECKEDCIRCLE : EMPTYCIRCLE}
          </span>
        </div>
        <input
          className="title form-control shadow-none bg-light col-5 d-flex justify-content-left"
          type="text"
          ref={(input) => {
            this.titleInput = input;
          }}
          value={titleInputValue}
          onChange={this.handleTitleInputChange}
          onBlur={this.updateTaskTitle}
          disabled={!isEditMode}
        />
        <div className="col-1 d-flex border-left justify-content-center">
          <div className="align-middle">{THUMBSUP}</div>
          <div className="givenClaps">{givenClaps.length}</div>
        </div>
        <div className="col-1 d-flex border-left justify-content-center">
          <img className="w-25" src="/potato_mango.png" alt="mango" />
          <div className="mangosDonated">{this.countMangoDonations()}</div>
        </div>
        <div className="col-2 d-flex border-left justify-content-center">
          <div className="calendar">
            <Calendar dueDate={dueDate} handleDateChange={this.updateDueDate} />
          </div>
        </div>
        <div className="col-1 d-flex border-left justify-content-center">
          <span role="button" tabIndex={0} onClick={this.togglePrivacy}>
            {isPublic ? PUBLICEYE : PRIVATEEYE}
          </span>
        </div>
        <div className="col-1 d-flex border-left justify-content-center">
          <OverlayTrigger
            trigger="focus"
            placement="right"
            overlay={popoverRight}
          >
            <a tabIndex={0} className="btn btn-sm btn-light" role="button">
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
