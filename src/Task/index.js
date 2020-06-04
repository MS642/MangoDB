import React from 'react';

class Task extends React.Component {
  render() {
    const { title, description, givenClaps, bitTransactions, dueDate }
    return (
      <div className="task">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <div className="givenClaps">{givenClaps.count}</div>
      </div> 
    );
  }
}