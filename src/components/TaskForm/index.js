import React from "react";
import { connect } from "react-redux";
import Calendar from "components/TaskList/components/TaskItem/components/Calendar";

import { createNewTaskAction } from "actions/task";
import TASK_ICON from "services/IconHelper/ICON/TASK_ICON";
import getIcon from "services/IconHelper/getIcon";

import "./Task.css";
import "./index.scss";

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      isPublic: true,
      dueDate: null,
      isPublicHover: false,
      isFormActive: true,
    };
  }

  handleTitleChange = (event) => {
    this.setState({ description: event.target.value });
  };

  handleDueDateChange = (dueDate) => {
    const utcDate = dueDate ? dueDate.getTime() : "";
    this.setState({ dueDate: utcDate });
  };

  handleIsPublicToggle = () => {
    const { isPublic } = this.state;
    this.setState({ isPublic: !isPublic });
  };

  toggleIsFormActive = () => {
    const { description, isPublic, isFormActive } = this.state;
    this.setState({ description, isPublic, isFormActive: !isFormActive });
  };

  createNewTask = (event) => {
    event.preventDefault();
    const { description, isPublic, dueDate } = this.state;
    const { userProfileDB, dispatchCreateNewTask } = this.props;
    const { _id } = userProfileDB;
    const newTask = { description, isPublic, dueDate };
    dispatchCreateNewTask(newTask, _id);
    this.setState({
      description: "",
      isPublic: true,
      dueDate: null,
    });
  };

  render() {
    const {
      description,
      isPublic,
      isPublicHover,
      isFormActive,
      dueDate,
    } = this.state;
    const publicIconState = isPublic ? TASK_ICON.public : TASK_ICON.private;
    const taskForm = (
      <form
        className="taskForm row bg-secondary mt-2 p-2 rounded align-items-center"
        onSubmit={this.createNewTask}
      >
        <input
          className="col-9 form-control shadow-none"
          type="text"
          value={description}
          onChange={this.handleTitleChange}
        />
        <div className="col-2 d-flex justify-content-center calendar">
          <Calendar
            dueDate={dueDate}
            handleDateChange={this.handleDueDateChange}
          />
        </div>
        <div className="col-1 d-flex justify-content-center isPublic">
          <button
            className="cursor-pointer"
            onClick={() => {
              this.handleIsPublicToggle();
              this.setState({ isPublicHover: !isPublicHover });
            }}
            type="button"
            onMouseEnter={() => {
              this.setState({ isPublicHover: true });
            }}
            onMouseLeave={() => {
              this.setState({ isPublicHover: false });
            }}
          >
            {getIcon(publicIconState, isPublicHover)}
          </button>
        </div>
      </form>
    );

    const addTask = (
      <button
        type="submit"
        className="taskForm row bg-secondary mt-2 p-2 rounded align-items-center"
        onClick={this.toggleIsFormActive}
      >
        <div className="col-12 d-flex justify-content-center">
          <h4>+</h4>
        </div>
      </button>
    );
    return isFormActive ? taskForm : addTask;
  }
}

const mapStateToProps = ({ userProfileDB }) => {
  return {
    userProfileDB,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchCreateNewTask: (newTask, user_id) =>
      dispatch(createNewTaskAction(newTask, user_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
