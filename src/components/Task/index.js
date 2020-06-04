import React from 'react';

class Task extends React.Component {
  countMangoDonations() {
    const { mangoTransactions } = this.props.task;
    return mangoTransactions.reduce((acc, curr) => {
      return acc + curr.mangoAmount;
    }, 0);
  }

  render() {
    const { title, description, givenClaps, mangoTransactions, dueDate } = this.props.task;
    return (
      <div className="task row bg-light mt-2 p-2 rounded">
        <div className="col-8">
          <div className="title">{title}</div>
        </div>
        <div className="col-1 d-flex border-left justify-content-center">
          <div className="givenClaps">{givenClaps.length}</div>
        </div>
        <div className="col-2 d-flex border-left justify-content-center">
          <img className="w-25" src="/temp_mango.svg" alt="mango"/>
          <div className="mangosDonated">{this.countMangoDonations()}</div>
        </div>
        <div className="col-1 d-flex border-left justify-content-center">
          <svg class="bi bi-eye-fill" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
            <path fill-rule="evenodd" d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
          </svg>
        </div>
      </div>
    );
  }
}

export default Task;