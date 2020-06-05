import React from 'react';
import TaskList from '../../components/TaskList';
import TaskForm from '../../components/TaskForm';

class TaskPage extends React.Component {
  render() {
    return (
      <div>
        <TaskForm />
        <TaskList />
      </div>
    );
  }
}

export default TaskPage;