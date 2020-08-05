import * as React from "react";
import { connect } from "react-redux";
import { Button, Accordion, Card } from "react-bootstrap";
import {
  updateTaskItemAction,
  deleteTaskItemAction,
  completeTaskItemAction,
} from "actions/task";
import { addAlert as addAlertAction } from "actions/alerts";
import { AlertType } from "reducers/alertReducer";
import SubTasks from "components/SubTask";
import { LOGO_URL, CLAP_IMG_URL } from "assets/assets";
import { sumMangos } from "services/mangoTransactions";
import { isOverdue } from "services/Date";
import TASK_ICON from "services/IconHelper/ICON/TASK_ICON";
import getIcon from "services/IconHelper/getIcon";
import OptionsPopover from "./components/OptionsPopover";
import ProgressBar from "./components/ProgressBar";
import Calendar from "./components/Calendar";
import "./index.scss";

class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    const { task } = this.props;
    const { description } = task;
    this.state = {
      descInputValue: description,
      isEditMode: false,
      isDoneHover: false,
      isPublicHover: false,
      isExpanded: false,
    };
    this.descriptionInput = React.createRef();
  }

  handleDescInputChange = (event) => {
    this.setState({ descInputValue: event.target.value });
  };

  toggleCompletion = () => {
    const { task, user_id, completeTask, addAlert } = this.props;
    const { _id, isDone } = task;
    if (!isDone) {
      completeTask(_id, user_id);
    } else {
      addAlert(
        AlertType.NORMAL,
        "Cannot undo completing a task since you've been awarded your mangos already."
      );
    }
  };

  togglePrivacy = () => {
    const { task, updateTask } = this.props;
    const { _id, isPublic, timestamp } = task;
    const taskChange = { isPublic: !isPublic };
    updateTask(_id, timestamp, taskChange);
  };

  toggleEditMode = () => {
    const { isEditMode } = this.state;
    this.setState({ isEditMode: !isEditMode }, () => {
      const { isEditMode: updatedIsEditMode } = this.state;
      if (updatedIsEditMode) {
        this.descriptionInput.focus();
      } else {
        this.descriptionInput.blur();
      }
    });
  };

  countMangoDonations = () => {
    const { task } = this.props;
    const { mangoTransactions } = task;
    return sumMangos(mangoTransactions);
  };

  updateTaskDescription = (event) => {
    event.preventDefault();
    this.toggleEditMode();
    const { descInputValue } = this.state;
    const { task, updateTask } = this.props;
    const { _id, timestamp } = task;
    const taskChange = {
      description: descInputValue,
    };
    updateTask(_id, timestamp, taskChange);
  };

  updateDueDate = (dueDate) => {
    const { updateTask, task } = this.props;
    const { _id, timestamp } = task;
    const utcDate = dueDate ? dueDate.getTime() : "";
    const taskChange = { dueDate: utcDate };
    updateTask(_id, timestamp, taskChange);
  };

  deleteTask = () => {
    const { deleteTask, task } = this.props;
    const { _id } = task;
    deleteTask(_id);
  };

  getProgressPercentage = (task) => {
    const subtasks = task.subTasks;
    if (subtasks) {
      let sum = 0;
      if (task.isDone) {
        return 100;
      }
      for (let i = 0; i < subtasks.length; i += 1) {
        if (subtasks[i].isDone) {
          sum += 1;
        }
      }
      return (sum / (subtasks.length + 1)) * 100;
    }
    return 0;
  };

  render() {
    const { task } = this.props;
    const { givenClaps, isPublic, isDone, dueDate } = task;
    const {
      descInputValue,
      isEditMode,
      isDoneHover,
      isPublicHover,
      isExpanded,
    } = this.state;

    const taskColor = isDone ? "done" : "bg-light";
    const isDueDateRed = !isDone && isOverdue(dueDate) ? "overdue" : "";
    const iconClassName = "material-icons task-icon";
    const doneIcon = isDone ? TASK_ICON.done : TASK_ICON.notDone;
    const isDoneIconState = getIcon(doneIcon, isDoneHover);
    const isPublicIcon = isPublic ? TASK_ICON.public : TASK_ICON.private;
    const isPublicIconState = getIcon(isPublicIcon, isPublicHover);
    return (
      <Accordion>
        <Card>
          <Card.Header>
            <div>
              <form
                className={`task row rounded align-items-center ${taskColor}`}
                onSubmit={this.updateTaskDescription}
              >
                <div className="col-2 col-sm-1 col-md-2 col-lg-1 d-flex border-left justify-content-center">
                  <Accordion.Toggle
                    as={Button}
                    variant="btn"
                    eventKey="0"
                    onClick={() => {
                      this.setState({ isExpanded: !isExpanded });
                    }}
                  >
                    {isExpanded ? (
                      <i className={iconClassName}>keyboard_arrow_down</i>
                    ) : (
                      <i className={iconClassName}>keyboard_arrow_left</i>
                    )}
                  </Accordion.Toggle>
                </div>
                <div className="col-2 col-sm-1 col-md-2 col-lg-1 d-flex justify-content-center">
                  <button
                    className="cursor-pointer"
                    onClick={() => {
                      this.setState({ isDoneHover: !isDone });
                      this.toggleCompletion();
                    }}
                    type="button"
                    onMouseEnter={() => this.setState({ isDoneHover: true })}
                    onMouseLeave={() => this.setState({ isDoneHover: false })}
                  >
                    {isDoneIconState}
                  </button>
                </div>
                <input
                  className="description form-control shadow-none col-8 col-sm-10 col-md-8 col-lg d-flex justify-content-left"
                  type="text"
                  ref={(input) => {
                    this.descriptionInput = input;
                  }}
                  value={descInputValue}
                  onChange={this.handleDescInputChange}
                  onBlur={this.updateTaskDescription}
                  disabled={!isEditMode}
                />
                <div className="col-3 col-sm-3 col-md-2 col-lg-1 d-flex border-left justify-content-center">
                  <div className="align-middle row no-gutters">
                    <img
                      className="col-6"
                      src={CLAP_IMG_URL}
                      width="25px"
                      height="25px"
                      alt="clap count"
                    />
                    <div className="col-6 givenClaps d-flex justify-content-center align-center">
                      {givenClaps ? givenClaps.length : 0}
                    </div>{" "}
                  </div>
                </div>
                <div className="col-3 col-sm-3 col-md-2 col-lg-1 d-flex border-left justify-content-center">
                  <div className="align-middle row no-gutters">
                    <img className="col-6" src={LOGO_URL} alt="mango" />
                    <div className="col-6 mangosDonated d-flex justify-content-center align-center">
                      {this.countMangoDonations()}
                    </div>
                  </div>
                </div>
                <div
                  className={`col-5 col-sm-4 col-md-3 col-lg-2 d-flex border-left justify-content-center ${isDueDateRed}`}
                >
                  <Calendar
                    className="cursor-pointer calendar"
                    dueDate={dueDate}
                    handleDateChange={this.updateDueDate}
                  />
                </div>
                <div className="col-6 col-sm-1 col-md-2 col-lg-1 d-flex border-left justify-content-center">
                  <button
                    className="cursor-pointer"
                    onClick={() => {
                      this.setState({ isPublicHover: !isPublic });
                      this.togglePrivacy();
                    }}
                    type="button"
                    onMouseEnter={() => {
                      this.setState({ isPublicHover: true });
                    }}
                    onMouseLeave={() => {
                      this.setState({ isPublicHover: false });
                    }}
                  >
                    {isPublicIconState}
                  </button>
                </div>
                <div className="col-1 col-sm-1 col-md-2 col-lg-1 d-flex border-left justify-content-center">
                  <OptionsPopover
                    editCallback={this.toggleEditMode}
                    deleteCallback={this.deleteTask}
                  />
                </div>
              </form>
              <ProgressBar value={this.getProgressPercentage(task)} />
            </div>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <SubTasks task={task} />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}

const mapStateToProps = (state) => {
  const { tasks, userProfileDB } = state;
  return {
    tasks,
    user_id: userProfileDB._id,
  };
};

const mapDispatchToProps = {
  deleteTask: deleteTaskItemAction,
  updateTask: updateTaskItemAction,
  completeTask: completeTaskItemAction,
  addAlert: addAlertAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
