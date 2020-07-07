import React from "react";
import { connect } from "react-redux";
import TaskItem from "./components/TaskItem";

/* subtasks */
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SubTasks from "../SubTask";

/* progress bar*/
import LinearProgress from "@material-ui/core/LinearProgress";
import { updateTaskItem} from "./components/TaskItem/actions";

class TaskList extends React.Component {
  shouldComponentUpdate(nextProps) {
    return (this.props.tasks !== nextProps.tasks);
}
  render() {
    const { tasks } = this.props;
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
              <div
                onClick={event => event.stopPropagation()}
                onFocus={event => event.stopPropagation()}
                onKeyDown={event => event.stopPropagation()}
                role="complementary"
              >
                <TaskItem key={task.id} task={task} />
                <div>
                  <LinearProgress variant="determinate" value={task.subTaskProgress}/>
                </div>
              </div>
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
