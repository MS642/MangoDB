import * as React from "react";
import TaskList from "../../../components/TaskList";
import TaskForm from "../../../components/TaskForm";

class TaskPage extends React.Component {
  render() {
    return (
      <div>
        <div className="container bg-dark text-white">
          <br />
          <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center">
              <h1 className="display-3">What You&apos;re Up To</h1>
            </div>
          </div>
          <TaskForm />
          <TaskList />
        </div>
      </div>
    );
  }
}

export default TaskPage;
