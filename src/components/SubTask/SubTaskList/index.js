import { Component } from "react";
import * as React from "react";
import { connect } from "react-redux";
import { updateSubtask } from './actions';

class SubTaskList extends Component {
  constructor(props) {
    super();
    this.state = {
      data: props.subTasks,
      mainData: props.tasks,
    };
  }

  changeState = (subtask, task, tasks) => {
    var payload =  {
      id: task.id,
      description: subtask.description,
      isDone: !subtask.isDone,
    }
    this.props.updateSubtask(payload);
    this.props.update()
    this.forceUpdate();
  };

  renderList() {
    const unChecked = (<img
      className=" rounded float-left"
      width="30px"
      height="30px"
      src="/untick.svg"
      alt="tick sign"
    />);
    const Checked = (<img
      className=" rounded float-left"
      width="30px"
      height="30px"
      src="/tick.svg"
      alt="tick sign"
    />);
    
    const { tasks, task} = this.props;

    return this.props.subTasks.map((subtask) => {
      // let status = subtask.isDone;
      return (
        <div
          className=" task row bg-light mt-2 p-2 rounded align-items-center h-50"
          key={subtask.description + this.props.task}
        >
          <div className="container">
            <div className="row">
              <div className="col-2 d-flex border-left align-self-start justify-content-start rounded ">
                <span role="button" tabIndex={0} onClick={()=> {this.changeState(subtask,task, tasks);}}>
                  {subtask.isDone ? Checked : unChecked}
                </span>
              </div>
              <div className="col-10 d-flex border-left align-self-start justify-content-start rounded ">
                {subtask.description}
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="container">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { tasks: state.tasks};
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     updateSubtask: (subtask) => dispatch(updateSubtask(subtask)),
//   };
// };

export default connect(mapStateToProps, {updateSubtask})(SubTaskList);
