import React from 'react';
import { connect } from 'react-redux';
import { createNewTask } from './actions';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      isPublic: true
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleIsPublicChange = this.handleIsPublicChange.bind(this);
    this.createNewTask = this.createNewTask.bind(this);
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value,
      isPublic: this.state.isTaskPublic
    })
  }

  handleIsPublicChange(event) {
    this.setState({
      enteredTaskTitle: this.state.enteredTaskTitle, 
      isTaskPublic: event.target.value 
    })
  }

  createNewTask(event) {
    event.preventDefault();
    const { title, isPublic } = this.state;
    const newTask = {
      title,
      isPublic
    };
    this.props.createNewTask(newTask);
    this.setState({
      title: '',
      isPublic: true
    })
  }


  render() {
    return (
      <form className='taskForm row bg-light mt-2 p-2 rounded align-items-center' onSubmit={this.createNewTask}>
        <input className='col-11' type='text' value={this.state.title} onChange={this.handleTitleChange}/>
        <div className='col-1 d-flex justify-content-center'>
          <label>Public</label>
          <input type='checkbox' name='isPublic' value={this.state.isPublic}/>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createNewTask: newTask => dispatch(createNewTask(newTask))
  }
}

export default connect(null, mapDispatchToProps)(TaskForm);