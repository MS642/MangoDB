import React from 'react';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enteredTaskTitle: "",
      isTaskPublic: true
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleIsPublicChange = this.handleIsPublicChange.bind(this);
    this.createNewTask = this.createNewTask.bind(this);
  }

  handleTitleChange(event) {
    this.setState({
      enteredTaskTitle: event.target.value,
      isTaskPublic: this.state.isTaskPublic
    })
  }

  handleIsPublicChange(event) {
    this.setState({
      enteredTaskTitle: this.state.enteredTaskTitle, 
      isTaskPublic: event.target.value 
    })
  }

  createNewTask(event) {
    alert('submitted!');
    event.preventDefault();
  }

  render() {
    return (
      <form className='taskForm row bg-light mt-2 p-2 rounded align-items-center' onSubmit={this.createNewTask}>
        <input className='col-11' type='text' value={this.state.enteredTaskTitle} onChange={this.handleTitleChange}/>
        <div className='col-1 d-flex justify-content-center'>
          <label>Public</label>
          <input type='checkbox' name='isPublic' value={this.state.isTaskPublic}/>
        </div>
        {/* <input className='col-1 d-flex justify-content-center' type='submit' value='Submit'/> */}
      </form>
    );
  }
}

export default TaskForm;