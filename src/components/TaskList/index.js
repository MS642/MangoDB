import React from "react";
import { connect } from "react-redux";

/* subtasks */
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TaskItem from "./components/TaskItem";
import SubTasks from "../SubTask";

class TaskList extends React.Component {
  render() {
    const { tasks } = this.props;
    const tasksItems = [];
    tasks.forEach((task) => {
      tasksItems.push(
        <div className="task row bg-light mt-2 p-2 rounded align-items-center">
          <ExpansionPanel className=" bg-light">
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-label="Expand"
              aria-controls="additional-actions1-content"
              id="additional-actions1-header"
              color="primary"
            >
              <div
                onClick={(event) => event.stopPropagation()}
                onFocus={(event) => event.stopPropagation()}
                onKeyDown={(event) => event.stopPropagation()}
                role="complementary"
              >
                <TaskItem key={task.id} task={task} />
              </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
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

export default connect(mapStateToProps)(TaskList);
