import React from 'react';
import TaskList from '../../components/TaskList';
import TaskForm from '../../components/TaskForm';

class TaskPage extends React.Component {
  render() {
    return (
      <div className="container">
        <TaskForm />
        <TaskList />
      </div>
    );
  }
}

export default TaskPage;