import { Component } from 'react';
import * as React from "react";
import { connect } from 'react-redux';
// import { selectTask } from '../actions';

class SubTaskList extends Component {
    renderList() {
        console.log(this.props.task);
        return this.props.task.subTasks.map((subtask) => {
            return (
                    <div className={" task row bg-light mt-2 p-2 rounded align-items-center h-50" } key={subtask.description}>
                        <div className="container">
                            <div className="row">
                                <div className={"col-2 d-flex border-left align-self-start justify-content-start rounded " }>
                                    <img className=" rounded float-left"  width={"30px"} height={"30px"}src="/tick.svg" alt="tick sign"></img>
                                </div>
                                <div className={"col-10 d-flex border-left align-self-start justify-content-start rounded " }>
                                    {subtask.description}
                                </div>
                            </div>
                        </div>   
                </div>
            );
        });
    };
    render () {
        return <div className="container">{this.renderList()}</div>;
    };
}

const mapStateToProps = (state) => {
    return { tasks: state.tasksItems};
}

export default connect(mapStateToProps
                    )
                    (SubTaskList);
