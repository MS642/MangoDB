import React from 'react';
import Task from '../Task';
import { TASKS } from '../Task/DummyData';

class TaskList extends React.Component {

  render() {
    const tasks = [];
    for (let task of TASKS) {
      tasks.push(<Task key={task.id} task={task}/>);
    }
    return (
      <div className="container taskList">
        {tasks}
      </div>
    );
  }
}

export default TaskList;