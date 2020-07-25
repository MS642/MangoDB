import React from "react";
import "./Task.css";
import "./index.scss";
import { connect } from "react-redux";
import { createNewTaskAction } from "actions/task";

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      isPublic: true,
      isPublicHover: false,
      isFormActive: false,
    };
  }

  handleTitleChange = (event) => {
    this.setState({ description: event.target.value });
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
    const { description, isPublic } = this.state;
    const { userProfileDB, dispatchCreateNewTask } = this.props;
    const { _id } = userProfileDB;
    const newTask = { description, isPublic };
    dispatchCreateNewTask(newTask, _id);
    this.setState({
      description: "",
      isPublic: true,
    });
  };

  render() {
    const { description, isPublic, isPublicHover, isFormActive } = this.state;
    const iconOutlineClassName = "material-icons-outlined task-icon";
    const iconClassName = "material-icons task-icon";

    let isPublicIconState;
    if (isPublicHover) {
      isPublicIconState = isPublic ? (
        <i className={iconOutlineClassName}>visibility_off</i>
      ) : (
        <i className={iconOutlineClassName}>visibility</i>
      );
    } else {
      isPublicIconState = isPublic ? (
        <i className={iconClassName}>visibility</i>
      ) : (
        <i className={iconClassName}>visibility_off</i>
      );
    }
    const taskForm = (
      <form
        className="taskForm row bg-secondary mt-2 p-2 rounded align-items-center"
        onSubmit={this.createNewTask}
      >
        <input
          className="col-11 form-control shadow-none"
          type="text"
          value={description}
          onChange={this.handleTitleChange}
        />
        <div className="col-1 d-flex justify-content-center isPublic">
          <button
            className="cursor-pointer"
            onClick={() => {
              this.setState({ isPublicHover: !isPublic });
              this.handleIsPublicToggle();
            }}
            type="button"
            onMouseEnter={() => {
              this.setState({ isPublicHover: true });
            }}
            onMouseLeave={() => {
              this.setState({ isPublicHover: false });
            }}
          >
            {isPublicIconState}
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
