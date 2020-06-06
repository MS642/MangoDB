import React from 'react';
import { connect } from 'react-redux';
import TaskForm from '../TaskForm';
import Task from './components/Task';

class TaskList extends React.Component {

  render() {
    // const { tasks } = this.props;
    const tasks = [];
    for (let task of this.props.tasks) {
      tasks.push(<Task key={task.id} task={task} openSubTasks = {this.props.openSubTasks} updateTasks={this.props.updateTasks} />);
    }
    return (
      <div className="taskList">
        {tasks}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { tasks: state.tasks }
};

// export default TaskList;
export default connect(mapStateToProps)(TaskList);