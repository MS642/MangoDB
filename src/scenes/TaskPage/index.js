import * as React from "react";
import TaskList from "../../components/TaskList";
import TaskForm from "../../components/TaskForm";
import Footer from "../../components/Footer/Footer";

class TaskPage extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <TaskForm />
          <TaskList />
        </div>
      </div>
    );
  }
}

export default TaskPage;
