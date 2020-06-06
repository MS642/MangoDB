import * as React from "react";
import TaskList from '../../components/TaskList';
import TaskForm from '../../components/TaskForm';
import SubTask from '../../components/SubTask';

class TaskPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      task: { title: "", givenclaps:[3], isPublic:false, isDone:false, subTasks:{},
       mangoTransactions: [
        {
          mangoAmount: 10
        }]},
      showSubTasks: false,
    };
    this.openSubTasks = this.openSubTasks.bind(this);
    this.updateTask = this.updateTask.bind(this);
  }

    updateTask(t){
      this.setState({
        task: t
      });
    }

    openSubTasks(){
      this.setState({
        showSubTasks:true
      });
    }

    render() {
      console.log("start");
      console.log(this.props);
      let closeSubTasks = () => this.setState({showSubTasks:false}); 
        return (
          <div className="container">
            <SubTask show ={this.state.showSubTasks} onHide={closeSubTasks} tasks = {this.state.task}/>
            <TaskForm />
            <TaskList openSubTasks = {this.openSubTasks} updateTasks={this.updateTask}/>
          </div>
        );
    }
}

export default TaskPage;