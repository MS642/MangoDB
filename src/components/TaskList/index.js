import React from 'react';
import Task from '../Task';
import { connect } from 'react-redux';
import { TASKS } from '../Task/DummyData';

class TaskList extends React.Component {

  render() {
    // const { tasks } = this.props;
    const tasks = [];
    for (let task of this.props.tasks) {
      tasks.push(<Task key={task.id} task={task}/>);
    }
    return (
      <div className="container taskList">
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