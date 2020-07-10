import React from "react";
import { connect } from "react-redux";

/* subtasks */
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

/* progress bar */
import LinearProgress from "@material-ui/core/LinearProgress";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import SubTasks from "../SubTask";
import { updateTaskItem } from "./components/TaskItem/actions";
import TaskItem from "./components/TaskItem";

/* To fix visual after having to use button for eslint */
import "../SubTask/components/SubTaskList/scroll.css";

class TaskList extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { tasks } = this.props;
    return tasks !== nextProps.tasks;
  }

  stopEvent = (event) => {
    event.stopPropagation();
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
      tasksItems.push(
        <div className="task row mt-2 p-2 rounded align-items-center">
          <ExpansionPanel className="bg-light">
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-label="Expand"
              aria-controls="additional-actions1-content"
              id="additional-actions1-header"
              color="primary"
            >
              <button
                type="submit"
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
                    value={task.subTaskProgress}
                  />
                </ThemeProvider>
              </button>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className="bg-dark">
              <SubTasks task={task} />
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      );
    });
    return <div className="taskList">{tasksItems}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateTask: (task) => dispatch(updateTaskItem(task)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
