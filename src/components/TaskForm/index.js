import React from "react";
import { connect } from "react-redux";
import { createNewTask } from "./actions";

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      isPublic: true,
      isFormActive: false,
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleIsPublicToggle = this.handleIsPublicToggle.bind(this);
    this.createNewTask = this.createNewTask.bind(this);
    this.toggleIsFormActive = this.toggleIsFormActive.bind(this);
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value,
      isPublic: this.state.isPublic,
    });
  }

  handleIsPublicToggle(event) {
    console.log(event.target.checked);
    this.setState({
      title: this.state.title,
      isPublic: event.target.checked,
    });
  }

  toggleIsFormActive(event) {
    const { title, isPublic, isFormActive } = this.state;
    this.setState({
      title,
      isPublic,
      isFormActive: !isFormActive,
    });
  }

  createNewTask(event) {
    event.preventDefault();
    const { title, isPublic } = this.state;
    const newTask = {
      title,
      isPublic,
    };
    this.props.createNewTask(newTask);
    this.setState({
      title: "",
      isPublic: true,
    });
  }

  render() {
    const taskForm = (
      <form
        className="taskForm row bg-light mt-2 p-2 rounded align-items-center"
        onSubmit={this.createNewTask}
      >
        <input
          className="col-11"
          type="text"
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <div className="col-1 d-flex justify-content-center">
          <label>Public</label>
          <input
            type="checkbox"
            checked={this.state.isPublic}
            onChange={this.handleIsPublicToggle}
          />
        </div>
      </form>
    );
    const addTask = (
      <div
        className="taskForm row bg-light mt-2 p-2 rounded align-items-center"
        onClick={this.toggleIsFormActive}
      >
        <span className="col-1">+</span>
      </div>
    );
    return this.state.isFormActive ? taskForm : addTask;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createNewTask: (newTask) => dispatch(createNewTask(newTask)),
  };
};

export default connect(null, mapDispatchToProps)(TaskForm);
