import React from 'react';
import { connect } from 'react-redux';
import { PUBLICEYE, PRIVATEEYE, THUMBSUP, EMPTYCIRCLE, EMPTYCHECKEDCIRCLE, FILLEDCHECKEDCIRCLE } from './Icon';
import { toggleCompletion, togglePrivacy } from './actions';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.countMangoDonations = this.countMangoDonations.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
    this.togglePrivacy = this.togglePrivacy.bind(this);

  }
  
  toggleCompletion() {
    this.props.toggleCompletion(this.props.task.id);
  }

  togglePrivacy() {
    this.props.togglePrivacy(this.props.task.id);
  }

  countMangoDonations() {
    const { mangoTransactions } = this.props.task;
    return mangoTransactions.reduce((acc, curr) => {
      return acc + curr.mangoAmount;
    }, 0);
  }

  render() {
    const { id, title, description, givenClaps, dueDate, isPublic, isDone } = this.props.task;
    return (
      <div className="task row bg-light mt-2 p-2 rounded align-items-center">
        <div className="col-1 d-flex justify-content-left">
          <span onClick={this.toggleCompletion}>
            {(isDone) ? FILLEDCHECKEDCIRCLE : EMPTYCIRCLE}
          </span>
        </div>
        <div className="col-7 d-flex justify-content-left">
          <div className="title">{title}</div>
        </div>
        <div className="col-1 d-flex border-left justify-content-center">
          <div className="align-middle">{THUMBSUP}</div>
          <div className="givenClaps">{givenClaps.length}</div>
        </div>
        <div className="col-2 d-flex border-left justify-content-center">
          <img className="w-25" src="/temp_mango.svg" alt="mango"/>
          <div className="mangosDonated">{this.countMangoDonations()}</div>
        </div>
        <div className="col-1 d-flex border-left justify-content-center">
          <span onClick={this.togglePrivacy}>
            {(isPublic) ? PUBLICEYE : PRIVATEEYE}
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
}

const mapDispatchToProps = dispatch => {
  return {
    toggleCompletion: taskID => dispatch(toggleCompletion(taskID)),
    togglePrivacy: taskID => dispatch(togglePrivacy(taskID))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);