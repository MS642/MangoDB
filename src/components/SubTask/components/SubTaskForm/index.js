import React from "react";
import { connect } from "react-redux";
import { updateTaskItemAction } from "actions/task";

class SubTaskForm extends React.Component {
  constructor() {
    super();
    this.state = {
      subTask: "",
    };
  }

  addCreatedSubTask = (newSubTask) => {
    const { task } = this.props;
    const newTask = task;
    const { description, isDone } = newSubTask;
    const subTask = {
      description,
      isDone,
    };
    newTask.subTasks = [...task.subTasks, subTask];
    return newTask;
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  createSubtask = (e) => {
    const { updateTask } = this.props;
    e.preventDefault();
    const { task } = this.props;
    const { subTask } = this.state;
    const subTaskPayload = {
      id: task.id,
      description: subTask,
      isDone: false,
    };

    this.setState({
      subTask: "",
    });

    if (subTaskPayload.description === "") {
      e.preventDefault();
    } else {
      const updatedTask = this.addCreatedSubTask(subTaskPayload);
      updateTask(updatedTask);
    }
  };

  render() {
    const { subTask } = this.state;
    return (
      <div className="form">
        <div className="container">
          <div className=" task row bg-light mt-2 p-2 rounded align-items-center">
            <div className="col-2 d-flex border-left align-self-start justify-content-start rounded float-left nopadding">
              <img
                className=" rounded float-left"
                width="30px"
                height="30px"
                src="/plus.svg"
                alt="plus sign"
              />
            </div>
            <div className="col d-flex  align-self-start justify-content-start nopadding">
              <form
                className=" align-self-start justify-content-start nopadding"
                onSubmit={this.createSubtask}
              >
                <input
                  type="text"
                  placeholder="Add a subTask"
                  name="subTask"
                  value={subTask}
                  onChange={this.handleChange}
                />
                <input type="submit" hidden="True" />
              </form>
            </div>
          </div>
        </div>
      </div>
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
    updateTask: (task) => dispatch(updateTaskItemAction(task)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubTaskForm);
