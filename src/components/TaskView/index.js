import React from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { updateTaskItemAction, fetchTasksAction } from "actions/task";
import { isToday, isThisWeek } from "services/Date";
import TaskList from "components/TaskList";
import TaskForm from "components/TaskForm";
import TASKS_FILTER from "./TASKS_FILTER";

class TaskView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: TASKS_FILTER.all,
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

  setActiveTabFromDate = (date) => {
    const { selectedTab } = this.state;
    if (isToday(date) && selectedTab === TASKS_FILTER.today) {
      this.setState({ selectedTab: TASKS_FILTER.today });
      return;
    }
    if (isThisWeek(date) && selectedTab === TASKS_FILTER.week) {
      this.setState({ selectedTab: TASKS_FILTER.week });
      return;
    }
    this.setState({ selectedTab: TASKS_FILTER.all });
  };

  filteredTasks = () => {
    const { tasks } = this.props;
    const { selectedTab } = this.state;

    const filteredTasks = tasks;
    let filterTasksFunction = (task) => !task.isDone;

    switch (selectedTab) {
      case TASKS_FILTER.today: {
        filterTasksFunction = (task) => !task.isDone && isToday(task.dueDate);
        break;
      }
      case TASKS_FILTER.week: {
        filterTasksFunction = (task) =>
          !task.isDone && isThisWeek(task.dueDate);
        break;
      }
      case TASKS_FILTER.completed: {
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
        <TaskForm
          selectedTab={selectedTab}
          onTaskCreate={this.setActiveTabFromDate}
        />
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
