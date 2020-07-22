import * as React from "react";
import { connect } from "react-redux";

import { OverlayTrigger, Popover, Button } from "react-bootstrap";
import { updateTaskItemAction, deleteTaskItemAction } from "actions/task";
import "./index.scss";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import LinearProgress from "@material-ui/core/LinearProgress";

import SubTasks from "components/SubTask";
import Calendar from "./components/Calendar";
/* To fix visual after having to use button for eslint */
import "components/SubTask/components/SubTaskList/scroll.css";

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
    const { task, updateTask } = this.props;
    const { _id, isDone } = task;
    const taskChange = { isDone: !isDone };
    updateTask(_id, taskChange);
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
    if (mangoTransactions) {
      return mangoTransactions.reduce((acc, curr) => {
        return acc + curr.mangoAmount;
      }, 0);
    }
    return 0;
  };

  updateModal = () => {
    const { updateTasks, openSubTasks, task } = this.props;
    openSubTasks();
    return updateTasks(task);
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
    let isDoneIconState;
    if (isDoneHover) {
      isDoneIconState = <i className="material-icons-outlined">check_circle</i>;
    } else {
      isDoneIconState = isDone ? (
        <i className="material-icons">check_circle</i>
      ) : (
        <i className="material-icons">radio_button_unchecked</i>
      );
    }

    let isPublicIconState;
    if (isPublicHover) {
      isPublicIconState = isPublic ? (
        <i className="material-icons-outlined">visibility_off</i>
      ) : (
        <i className="material-icons-outlined">visibility</i>
      );
    } else {
      isPublicIconState = isPublic ? (
        <i className="material-icons">visibility</i>
      ) : (
        <i className="material-icons">visibility_off</i>
      );
    }

    return (
      <Accordion className="bg-light">
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
          color="primary"
        >
          <div>
            <form
              className="task row mt-2 p-2 rounded align-items-center bg-light"
              onSubmit={this.updateTaskDescription}
            >
              <div className="col-1 d-flex justify-content-left">
                <button
                  className="cursor-pointer"
                  onClick={this.toggleCompletion}
                  type="button"
                  onMouseEnter={() => this.setState({ isDoneHover: true })}
                  onMouseLeave={() => this.setState({ isDoneHover: false })}
                >
                  {isDoneIconState}
                </button>
              </div>
              <input
                className="title form-control shadow-none bg-light col-4 d-flex justify-content-left"
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
                  onClick={this.togglePrivacy}
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
                  trigger="focus"
                  placement="right"
                  overlay={popoverRight}
                >
                  <a
                    href="#editMode"
                    tabIndex={0}
                    className="btn btn-sm btn-light"
                    role="button"
                    type="button"
                  >
                    <i className="material-icons">more_vert</i>
                  </a>
                </OverlayTrigger>
              </div>
              <div className="col-1 d-flex border-left justify-content-center">
                <ExpandMoreIcon />
              </div>
            </form>
            <ThemeProvider theme={theme}>
              <LinearProgress
                variant="determinate"
                style={{ height: "10px" }}
                value={this.getProgressPercentage(task)}
              />
            </ThemeProvider>
          </div>
        </AccordionSummary>
        <AccordionDetails className="bg-dark">
          <SubTasks task={task} />
        </AccordionDetails>
      </Accordion>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTask: (task_id) => dispatch(deleteTaskItemAction(task_id)),
    updateTask: (task_id, taskChanges) =>
      dispatch(updateTaskItemAction(task_id, taskChanges)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
