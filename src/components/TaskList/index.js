import React from "react";
import { connect } from "react-redux";

/* subtasks */
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

/* progress bar */
import LinearProgress from "@material-ui/core/LinearProgress";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { updateTaskItemAction, fetchTasksAction } from "actions/task";
import TaskItem from "./components/TaskItem";
import SubTasks from "../SubTask";

/* To fix visual after having to use button for eslint */
import "../SubTask/components/SubTaskList/scroll.css";

class TaskList extends React.Component {
  componentDidMount() {
    const { fetchTasks, userDB } = this.props;
    const { _id } = userDB;
    fetchTasks(_id);
  }

  shouldComponentUpdate(nextProps) {
    const { tasks } = this.props;
    return tasks !== nextProps.tasks;
  }

  stopEvent = (event) => {
    event.stopPropagation();
  };

  getProgressPercentage = (task) => {
    const subtasks = task.subTasks;
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
  };

  render() {
    const { tasks } = this.props;
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
    const tasksItems = [];
    tasks.forEach((task) => {
      const { _id } = task;
      tasksItems.push(
        <div className="task row mt-2 p-2 rounded align-items-center" key={_id}>
          <Accordion className="bg-light">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-label="Expand"
              aria-controls="additional-actions1-content"
              id="additional-actions1-header"
              color="primary"
            >
              <div
                type="button"
                role="button"
                tabIndex={0}
                className="link-button"
                onClick={this.stopEvent}
                onFocus={this.stopEvent}
                onKeyDown={this.stopEvent}
              >
                <TaskItem key={task.id} task={task} />
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
        </div>
      );
    });
    return <div className="taskList">{tasksItems}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    userDB: state.userDB,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTasks: (user_id) => {
      dispatch(fetchTasksAction(user_id));
    },
    updateTask: (task) => dispatch(updateTaskItemAction(task)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
