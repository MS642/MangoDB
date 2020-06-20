import React from "react";
import { connect } from "react-redux";
import { addSubtask } from "./actions";

class SubTaskForm extends React.Component {
  constructor() {
    super();
    this.state = {
      subTask: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  createSubtask = (e) => {
    e.preventDefault();
    const subTaskPayload = {
      id: this.props.task.id,
      description: this.state.subTask,
      isDone: false,
    };

    this.setState({
      subTask: "",
    });

    if (subTaskPayload.description === "") {
      e.preventDefault();
    } else {
      this.props.addSubtask(subTaskPayload);
      this.props.update();
    }
  }

  render() {
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
                  value={this.state.subTask}
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
    addSubtask: (newSubTask) => dispatch(addSubtask(newSubTask)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubTaskForm);
