import React from "react";
import { connect } from "react-redux";
import { createSubTaskAction } from "actions/subTask";

class SubTaskForm extends React.Component {
  constructor() {
    super();
    this.state = {
      description: "",
      addSubTask: false,
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

  toggleAdd = () => {
    this.setState((prevState) => ({
      addSubTask: !prevState.addSubTask,
    }));
  };

  render() {
    const { description, addSubTask } = this.state;
    return (
      <div className="form row bg-light mt-2 p-2 rounded align-items-center bg-light">
        <div className="container">
          <div className="row bg-light  ">
            <div className="col-2 d-flex border-left align-self-start justify-content-start rounded ">
              <button onClick={this.toggleAdd} type="button">
                <img
                  className="cursor-pointer"
                  style={{ width: "30px", height: "30px" }}
                  src="/plus.svg"
                  alt="plus sign"
                />
              </button>
            </div>
            {addSubTask ? (
              <form
                className="col-9 form-control bg-light align-self-start justify-content-start nopadding"
                onSubmit={this.createSubtask}
              >
                <input
                  type="text"
                  placeholder="Add a subTask"
                  name="description"
                  value={description}
                  onChange={this.handleChange}
                  style={{ width: "100%" }}
                />
                <input type="submit" hidden="True" />
              </form>
            ) : (
              <div className="col-9 empty-block bg-light align-self-start justify-content-start " />
            )}
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
