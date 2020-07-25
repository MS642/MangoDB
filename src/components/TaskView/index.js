import React from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { updateTaskItemAction, fetchTasksAction } from "actions/task";
import { isToday, isThisWeek } from "services/Date";
import TaskList from "../TaskList";

const TASKSFILTER = {
  ALL: 0,
  TODAY: 1,
  WEEK: 2,
  COMPLETED: 3,
};

class TaskView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: TASKSFILTER.TODAY,
    };
  }

  componentDidMount() {
    const { fetchTasks, userProfileDB } = this.props;
    const { _id } = userProfileDB;
    fetchTasks(_id);
  }

  handleTabChange = (event, value) => {
    this.setState({ selectedTab: value });
  };

  filteredTasks = () => {
    const { tasks } = this.props;
    const { selectedTab } = this.state;
    const { TODAY, WEEK, COMPLETED } = TASKSFILTER;

    const filteredTasks = tasks;
    let filterTasksFunction = (task) => !task.isDone;

    switch (selectedTab) {
      case TODAY: {
        filterTasksFunction = (task) => !task.isDone && isToday(task.dueDate);
        break;
      }
      case WEEK: {
        filterTasksFunction = (task) =>
          !task.isDone && isThisWeek(task.dueDate);
        break;
      }
      case COMPLETED: {
        filterTasksFunction = (task) => task.isDone;
        break;
      }
      default: {
        break;
      }
    }
    return filteredTasks.filter(filterTasksFunction);
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <Paper>
        <Tabs
          value={selectedTab}
          onChange={this.handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="All" />
          <Tab label="Today" />
          <Tab label="Week" />
          <Tab label="Completed" />
        </Tabs>
        <TaskList tasks={this.filteredTasks()} />
      </Paper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    userProfileDB: state.userProfileDB,
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

export default connect(mapStateToProps, mapDispatchToProps)(TaskView);
