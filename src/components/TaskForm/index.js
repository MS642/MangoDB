import React from "react";
import "./Task.css";
import { connect } from "react-redux";
import { createNewTaskAction } from "actions/task";

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      isPublic: true,
      isFormActive: false,
    };
  }

  handleTitleChange = (event) => {
    this.setState({ description: event.target.value });
  };

  handleIsPublicToggle = (event) => {
    const { description } = this.state;
    const { checked } = event.target;
    this.setState({ description, isPublic: checked });
  };

  toggleIsFormActive = () => {
    const { description, isPublic, isFormActive } = this.state;
    this.setState({ description, isPublic, isFormActive: !isFormActive });
  };

  createNewTask = (event) => {
    event.preventDefault();
    const { description, isPublic } = this.state;
    const { userDB, dispatchCreateNewTask } = this.props;
    const { _id } = userDB;
    const newTask = { description, isPublic };
    dispatchCreateNewTask(newTask, _id);
    this.setState({
      description: "",
      isPublic: true,
    });
  };

  render() {
    const { description, isPublic, isFormActive } = this.state;
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
        <div className="col-1 d-flex justify-content-center">
          <div className="row">
            <div className="col-8 d-flex justify-content-center align-items-center">
              <label className="publicLabel" htmlFor="public">
                {/* TODO: change input to a visual indicator */}
                <input
                  id="public"
                  name="public"
                  type="checkbox"
                  checked={isPublic}
                  onChange={this.handleIsPublicToggle}
                />
              </label>
            </div>
          </div>
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

const mapStateToProps = ({ userDB }) => {
  return {
    userDB,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchCreateNewTask: (newTask, user_id) =>
      dispatch(createNewTaskAction(newTask, user_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
