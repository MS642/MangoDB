import React from "react";

import { Modal } from "react-bootstrap";
import AddSubTask from "./AddSubTask";
import SubTaskList from "./SubTaskList";

import {
  PUBLICEYE,
  PRIVATEEYE,
  THUMBSUP,
  EMPTYCIRCLE,
  EMPTYCHECKEDCIRCLE,
  FILLEDCHECKEDCIRCLE,
} from "../TaskList/components/Task/Icon";

class SubTask extends React.Component {
  countMangoDonations() {
    const { mangoTransactions } = this.props.tasks;
    return mangoTransactions.reduce((acc, curr) => {
      return acc + curr.mangoAmount;
    }, 0);
  }

  render() {
    const { title, givenClaps, isPublic, isDone } = this.props.tasks;
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h1>Task: {this.props.tasks.title}</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="task row bg-light mt-2 p-2 rounded align-items-center">
              <div className="col-1 d-flex justify-content-left">
                <span>{isDone ? FILLEDCHECKEDCIRCLE : EMPTYCIRCLE}</span>
              </div>
              <div className="col-7 d-flex justify-content-left">
                <span>
                  <div className="title">{title}</div>
                </span>
              </div>
              <div className="col-1 d-flex border-left justify-content-center">
                <div className="align-middle">{THUMBSUP}</div>
                <div className="givenClaps">{3}</div>
              </div>
              <div className="col-2 d-flex border-left justify-content-center">
                <img className="w-25" src="/temp_mango.svg" alt="mango" />
                <div className="mangosDonated">
                  {this.countMangoDonations()}
                </div>
              </div>
              <div className="col-1 d-flex border-left justify-content-center">
                <span>{isPublic ? PUBLICEYE : PRIVATEEYE}</span>
              </div>
            </div>
            <AddSubTask className=" task row bg-light mt-2 p-2 rounded align-items-center" />
            <SubTaskList
              className="task row bg-light mt-2 p-2 rounded align-items-center"
              task={this.props.tasks}
            />
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

export default SubTask;
