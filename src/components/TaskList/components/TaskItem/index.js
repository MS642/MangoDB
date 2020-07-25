import * as React from "react";
import { connect } from "react-redux";
import {
  OverlayTrigger,
  Popover,
  Button,
  Accordion,
  Card,
} from "react-bootstrap";
import {
  updateTaskItemAction,
  deleteTaskItemAction,
  completeTaskItemAction,
} from "actions/task";
import "./index.scss";
import "./accordion-override.css";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import SubTasks from "components/SubTask";
import "components/SubTask/components/SubTaskList/SubTask.css";
import { sumMangos } from "services/mangoTransactions";
import { isOverdue } from "services/Date";
import Calendar from "./components/Calendar";

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

  // TODO: properly implement later
  handleKeyDown = (event) => {
    return event.key === "Enter" ? "Enter" : "Not Enter";
  };

  toggleCompletion = () => {
    const { task, completeTask, user_id } = this.props;
    const { _id, isDone } = task;
    if (!isDone) {
      completeTask(_id, user_id);
    } else {
      // for now, disabling ability to undo completing task
    }
  };

  togglePrivacy = () => {
    const { task, updateTask } = this.props;
    const { _id, isPublic } = task;
    const taskChange = { isPublic: !isPublic };
    updateTask(_id, taskChange);
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
    const { _id } = task;
    const taskChange = {
      description: descInputValue,
    };
    updateTask(_id, taskChange);
  };

  updateDueDate = (dueDate) => {
    const { updateTask, task } = this.props;
    const { _id } = task;
    // this is set to an empty string b/c axios strips fields with null or undefined
    const utcDate = dueDate ? dueDate.getTime() : "";
    const taskChange = { dueDate: utcDate };
    updateTask(_id, taskChange);
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
    const theme = createMuiTheme({
      palette: {
        primary: {
          // Mango Orange
          main: "#FCA311",
        },
        secondary: {
          // Mango leaves green .
          main: "#11cb5f",
        },
      },
    });
    const popoverRight = (
      <Popover id="popover-options">
        <Popover.Content>
          <Button
            variant="light"
            size="sm"
            onClick={this.toggleEditMode}
            block="true"
          >
            Edit
          </Button>
          <Button
            variant="danger"
            size="sm"
            className=""
            onClick={this.deleteTask}
            block="true"
          >
            Delete
          </Button>
        </Popover.Content>
      </Popover>
    );

    let taskColor = isOverdue(dueDate) ? "bg-light" : "";
    if (isDone) {
      taskColor = "done";
    }

    let isDoneIconState;
    const iconOutlineClassName = "material-icons-outlined task-icon";
    const iconClassName = "material-icons task-icon";
    if (isDoneHover) {
      isDoneIconState = <i className={iconOutlineClassName}>check_circle</i>;
    } else {
      isDoneIconState = isDone ? (
        <i className={iconClassName}>check_circle</i>
      ) : (
        <i className={iconClassName}>radio_button_unchecked</i>
      );
    }

    let isPublicIconState;
    if (isPublicHover) {
      isPublicIconState = isPublic ? (
        <i className={iconOutlineClassName}>visibility_off</i>
      ) : (
        <i className={iconOutlineClassName}>visibility</i>
      );
    } else {
      isPublicIconState = isPublic ? (
        <i className={iconClassName}>visibility</i>
      ) : (
        <i className={iconClassName}>visibility_off</i>
      );
    }
    return (
      <Accordion>
        <Card styles={{ overflow: "visible" }}>
          <Card.Header styles={{ padding: 0 }}>
            <div>
              <form
                className={`task row mt-2 p-2 rounded align-items-center ${taskColor}`}
                onSubmit={this.updateTaskDescription}
              >
                <div className="col-1 d-flex justify-content-left">
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
                  className="description form-control shadow-none col-4 d-flex justify-content-left"
                  type="text"
                  ref={(input) => {
                    this.descriptionInput = input;
                  }}
                  value={descInputValue}
                  onChange={this.handleDescInputChange}
                  onBlur={this.updateTaskDescription}
                  disabled={!isEditMode}
                />
                <div className="col-1 d-flex border-left justify-content-center">
                  <div className="align-middle">
                    <img
                      src="https://i.imgur.com/tToSF7j.png"
                      width="25px"
                      height="25px"
                      alt="clap count"
                    />
                  </div>
                  <div className="givenClaps">
                    {givenClaps ? givenClaps.length : 0}
                  </div>{" "}
                </div>
                <div className="col-1 d-flex border-left justify-content-center">
                  <img className="w-25" src="/potato_mango.png" alt="mango" />
                  <div className="mangosDonated">
                    {this.countMangoDonations()}
                  </div>
                </div>
                <div className="col-2 d-flex border-left justify-content-center">
                  <Calendar
                    className="cursor-pointer calendar"
                    dueDate={dueDate}
                    handleDateChange={this.updateDueDate}
                  />
                </div>
                <div className="col-1 d-flex border-left justify-content-center">
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
                <div className="col-1 d-flex border-left justify-content-center">
                  <OverlayTrigger
                    trigger="click"
                    placement="right"
                    overlay={popoverRight}
                    rootClose
                  >
                    <Button bsPrefix="none">
                      <i className="material-icons">more_vert</i>
                    </Button>
                  </OverlayTrigger>
                </div>
                <div className="col-1 d-flex border-left justify-content-center">
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
              </form>
              <ThemeProvider theme={theme}>
                <LinearProgress
                  variant="determinate"
                  style={{ height: "15px" }}
                  value={this.getProgressPercentage(task)}
                />
              </ThemeProvider>
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

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTask: (task_id) => dispatch(deleteTaskItemAction(task_id)),
    updateTask: (task_id, taskChanges) =>
      dispatch(updateTaskItemAction(task_id, taskChanges)),
    completeTask: (task_id, user_id) =>
      dispatch(completeTaskItemAction(task_id, user_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
