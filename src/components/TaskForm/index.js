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
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  handleIsPublicToggle = (event) => {
    const { title } = this.state;
    const { checked } = event.target;
    this.setState({ title, isPublic: checked });
  };

  toggleIsFormActive = () => {
    const { title, isPublic, isFormActive } = this.state;
    this.setState({ title, isPublic, isFormActive: !isFormActive });
  };

  createNewTask = (event) => {
    event.preventDefault();
    const { title, isPublic } = this.state;
    const newTask = { title, isPublic };
    this.props.createNewTask(newTask);
    this.setState({
      title: "",
      isPublic: true,
    });
  };

  render() {
    const { title, isPublic, isFormActive } = this.state;
    const taskForm = (
      <form
        className="taskForm row bg-light mt-2 p-2 rounded align-items-center"
        onSubmit={this.createNewTask}
      >
        <input
          className="col-11 form-control shadow-none"
          type="text"
          value={title}
          onChange={this.handleTitleChange}
        />
        <div className="col-1 d-flex justify-content-center">
          <label htmlFor="public">Public</label>
          <input
            type="checkbox"
            checked={isPublic}
            onChange={this.handleIsPublicToggle}
            name="public"
            id="public"
          />
        </div>
      </form>
    );
    const addTask = (
      <div
        role="button"
        tabIndex={0}
        className="taskForm row bg-secondary mt-2 p-2 rounded align-items-center"
        onClick={this.toggleIsFormActive}
      >
        <span className="col-1">+</span>
      </div>
    );
    return isFormActive ? taskForm : addTask;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createNewTask: (newTask) => dispatch(createNewTask(newTask)),
  };
};

export default connect(null, mapDispatchToProps)(TaskForm);
