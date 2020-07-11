import React from "react";
import { connect } from "react-redux";
import { createSubTaskAction } from "actions/subTask";

class SubTaskForm extends React.Component {
  constructor() {
    super();
    this.state = {
      description: "",
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
    e.preventDefault();
    const { task, dispatchCreateSubTask } = this.props;
    const { _id } = task;
    const { description } = this.state;
    const newSubTask = {
      description,
    };

    if (description !== "") {
      this.setState({
        description: "",
      });
      dispatchCreateSubTask(_id, newSubTask);
    }
  };

  render() {
    const { description } = this.state;
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
            <div className="col d-flex align-self-start justify-content-start nopadding">
              <form
                className="align-self-start justify-content-start nopadding"
                onSubmit={this.createSubtask}
              >
                <input
                  type="text"
                  placeholder="Add a subTask"
                  name="description"
                  value={description}
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
    dispatchCreateSubTask: (task_id, newSubTask) => {
      return dispatch(createSubTaskAction(task_id, newSubTask));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubTaskForm);
