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
    this.handleIsPublicToggle = this.handleIsPublicToggle.bind(this);
    this.createNewTask = this.createNewTask.bind(this);
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value,
      isPublic: this.state.isPublic
    })
  }

  handleIsPublicToggle(event) {
    console.log(event.target.checked);
    this.setState({
      title: this.state.title, 
      isPublic: event.target.checked 
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
          <input type='checkbox' checked={this.state.isPublic} onChange={this.handleIsPublicToggle}/>
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