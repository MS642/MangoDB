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
      <div className="task row bg-light">
        <div className="col-8">
          <div className="title">{title}</div>
        </div>
        <div className="col-2">
          <div className="givenClaps">{givenClaps.length}</div>
        </div>
        <div className="col-2">
          <div className="mangosDonated">{this.countMangoDonations()}</div>
        </div>
      </div>
    );
  }
}

export default Task;