import * as React from "react";
import { connect } from "react-redux";
import Calendar from "./components/Calendar";
import {
  PUBLICEYE,
  PRIVATEEYE,
  THUMBSUP,
  EMPTYCIRCLE,
  EMPTYCHECKEDCIRCLE,
  FILLEDCHECKEDCIRCLE,
  THREEDOTS
} from "./Icon";
import {
  toggleCompletion,
  togglePrivacy,
  selectTask,
  updateTaskTitle,
  updateTaskDate,
  deleteTask,
} from "./actions";
import { Overlay, OverlayTrigger, Popover } from 'react-bootstrap';

class Task extends React.Component {
  constructor(props) {
    super(props);
    const { title, dueDate } = this.props.task;
    this.state = {
      titleInputValue: title, 
      title,
      dateValue: dueDate,
      isEditMode: false
    }
    this.titleInput = React.createRef();
    this.handleTitleInputChange = this.handleTitleInputChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.countMangoDonations = this.countMangoDonations.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
    this.togglePrivacy = this.togglePrivacy.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.selectTask = this.selectTask.bind(this);
    this.updateModal = this.updateModal.bind(this);
    this.updateTaskTitle = this.updateTaskTitle.bind(this);
    this.updateTaskDate = this.updateTaskTitle.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  handleTitleInputChange(event) {
    this.setState({ titleInputValue: event.target.value});
  }

  handleDateChange(date) {
    this.setState({ dateValue: date }, this.updateDate);
  }

  toggleCompletion() {
    this.props.toggleCompletion(this.props.task.id);
  }

  togglePrivacy() {
    this.props.togglePrivacy(this.props.task.id);
  }

  toggleEditMode(event) {
    const { isEditMode } = this.state
    this.setState({ isEditMode: !isEditMode }, () => { 
      if (this.state.isEditMode) {
        this.titleInput.focus();
      } else {
        this.titleInput.blur();
      }
    });
  }

  selectTask() {
    this.props.selectTask(this.props.task);
  }

  countMangoDonations() {
    const { mangoTransactions } = this.props.task;
    return mangoTransactions.reduce((acc, curr) => {
      return acc + curr.mangoAmount;
    }, 0);
  }

  updateModal() {
    const v = this.props.updateTasks;
    this.props.openSubTasks();
    return v(this.props.task);
  }

  updateTaskTitle(event) {
    event.preventDefault();
    this.toggleEditMode();
    const { titleInputValue } = this.state;
    const { task } = this.props;
    const updatedTask = {
      ...task,
      title: titleInputValue 
    }
    this.props.updateTaskTitle(updatedTask);
  }

  updateDate(event) {
    const { dateValue } = this.state;
    const { task } = this.props;
    const updatedTask = {
      ...task,
      dueDate: dateValue 
    }
    this.props.updateTaskDate(updatedTask);
  }

  deleteTask() {
    this.props.deleteTask(this.props.task.id);
  }

  render() {
    const {
      id,
      title,
      description,
      givenClaps,
      dueDate,
      isPublic,
      isDone,
    } = this.props.task;
    const { titleInputValue, dateValue, isEditMode } = this.state;
    const popoverRight = (
      <Popover id="popover-basic">
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
          <div className="calendar">{<Calendar dateValue={dateValue} handleDateChange={this.handleDateChange}/>}</div>
        </div>
        <div className="col-1 d-flex border-left justify-content-center">
          <span onClick={this.togglePrivacy}>
            {isPublic ? PUBLICEYE : PRIVATEEYE}
          </span>
        </div>
        <div className="col-1 d-flex border-left justify-content-center">
          {/* <button type="button" className="btn btn-sm btn-secondary" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">:</button> */}
          {/* X */}
          <OverlayTrigger trigger="focus" placement="right" overlay={popoverRight}>
            <a tabindex="0" class="btn btn-sm btn-light" role="button">{THREEDOTS}</a>
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
    toggleCompletion: taskID => dispatch(toggleCompletion(taskID)),
    togglePrivacy: taskID => dispatch(togglePrivacy(taskID)),
    selectTask: taskObj => dispatch(selectTask(taskObj)),
    updateTaskTitle: task => dispatch(updateTaskTitle(task)),
    updateTaskDate: task => dispatch(updateTaskDate(task)),
    deleteTask: taskID => dispatch(deleteTask(taskID)) 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);
