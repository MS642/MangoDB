import * as React from "react";
import { connect } from "react-redux";
import Calendar from "./components/Calendar";
import { 
  PUBLICEYE, PRIVATEEYE, THUMBSUP, 
  EMPTYCIRCLE, EMPTYCHECKEDCIRCLE, 
  FILLEDCHECKEDCIRCLE, THREEDOTS 
} from "assets/Icon";

import { updateTask, selectTask, deleteTask } from "./actions";
import { OverlayTrigger, Popover } from 'react-bootstrap';

class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    const { title, dueDate } = this.props.task;
    this.state = {
      titleInputValue: title, 
      title,
      dueDate,
      isEditMode: false
    }
    this.titleInput = React.createRef();
  }

  handleTitleInputChange = event => {
    this.setState({ titleInputValue: event.target.value });
  }

  toggleCompletion = () => {
    const { task } = this.props;
    const updatedTask = { ...task, isDone: !task.isDone }
    this.props.updateTask(updatedTask);
  }

  togglePrivacy = () => {
    const { task } = this.props;
    const updatedTask = { ...task, isPublic: !task.isPublic }
    this.props.updateTask(updatedTask);
  }

  toggleEditMode = () => {
    const { isEditMode } = this.state
    this.setState({ isEditMode: !isEditMode }, () => { 
      if (this.state.isEditMode) {
        this.titleInput.focus();
      } else {
        this.titleInput.blur();
      }
    });
  }

  selectTask = () => {
    this.props.selectTask(this.props.task);
  }

  countMangoDonations = () => {
    const { mangoTransactions } = this.props.task;
    return mangoTransactions.reduce((acc, curr) => {
      return acc + curr.mangoAmount;
    }, 0);
  }

  updateModal = () => {
    const v = this.props.updateTasks;
    this.props.openSubTasks();
    return v(this.props.task);
  }

  updateTaskTitle = event => {
    event.preventDefault();
    this.toggleEditMode();
    const { titleInputValue } = this.state;
    const updatedTask = {
      ...this.props.task,
      title: titleInputValue,
    };
    this.props.updateTask(updatedTask);
  }

  updateDueDate = dueDate => {
    const updatedTask = { ...this.props.task, dueDate } 
    this.props.updateTask(updatedTask);
  }
  
  deleteTask = () => {
    this.props.deleteTask(this.props.task.id);
  }

  render() {
    const { givenClaps, isPublic, isDone, dueDate } = this.props.task;
    const { titleInputValue, isEditMode } = this.state;
    const popoverRight = (
      <Popover id="popover-options">
        <Popover.Content>
          <div onClick={this.toggleEditMode}>Edit</div>
          <div onClick={this.deleteTask}>Delete</div>
        </Popover.Content>
      </Popover>
    );

    return (
      <form
        className="task row bg-light mt-2 p-2 rounded align-items-center"
        onSubmit={this.updateTaskTitle}
      >
        <div className="col-1 d-flex justify-content-left">
          <span onClick={this.toggleCompletion}>
            {isDone ? FILLEDCHECKEDCIRCLE : EMPTYCIRCLE}
          </span>
        </div>
        <input
          className="title form-control shadow-none bg-light col-5 d-flex justify-content-left" 
          type="text" 
          ref={(input) => { this.titleInput = input; }}
          value={titleInputValue}
          onChange={this.handleTitleInputChange}
          onBlur={this.updateTaskTitle}
          disabled={!isEditMode}
        >
        </input>
        <div className="col-1 d-flex border-left justify-content-center">
          <div className="align-middle">{THUMBSUP}</div>
          <div className="givenClaps">{givenClaps.length}</div>
        </div>
        <div className="col-1 d-flex border-left justify-content-center">
          <img className="w-25" src="/potato_mango.png" alt="mango" />
          <div className="mangosDonated">{this.countMangoDonations()}</div>
        </div>
        <div className="col-2 d-flex border-left justify-content-center">
          <div className="calendar">{<Calendar dueDate={dueDate} handleDateChange={this.updateDueDate}/>}</div>
        </div>
        <div className="col-1 d-flex border-left justify-content-center">
          <span onClick={this.togglePrivacy}>
            {isPublic ? PUBLICEYE : PRIVATEEYE}
          </span>
        </div>
        <div className="col-1 d-flex border-left justify-content-center">
          <OverlayTrigger trigger="focus" placement="right" overlay={popoverRight}>
            <a tabIndex="0" className="btn btn-sm btn-light" role="button">{THREEDOTS}</a>
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
    selectTask: taskObj => dispatch(selectTask(taskObj)),
    deleteTask: taskID => dispatch(deleteTask(taskID)),
    updateTask: task => dispatch(updateTask(task)) 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
