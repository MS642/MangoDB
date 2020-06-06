import React from 'react';
import { connect } from 'react-redux';
import {addSubtask} from '../../../actions'

class AddSubTask extends React.Component {
    constructor(){
        super();
        this.state = {
            subTask: "",
        };
        this.submitSubtask = this.submitSubtask.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        });

    }

    submitSubtask(e){
        e.preventDefault();
        const subTaskPayload =  { 
            description: this.state.subTask, 
            isDone: false
        }
        
        this.setState({
            subTask: "",
        });
        
        if(subTaskPayload.description === "") {
            e.preventDefault();
        } else {
            e.preventDefault();
            return;
            this.props.addSubTask(subTaskPayload);
        }
    };
    render () {
        return (<div className ="form">
        <div className={"container"}>
            <div className={" task row bg-light mt-2 p-2 rounded align-items-center"}>
                <div className={"col-2 d-flex border-left align-self-start justify-content-start rounded float-left nopadding" }>
                    <img className=" rounded float-left"  width={"30px"} height={"30px"}src="/plus.svg" alt="plus sign"></img>
                </div>
                <div className={"col d-flex  align-self-start justify-content-start nopadding"}>
                <form  className={" align-self-start justify-content-start nopadding"} onSubmit={this.submitSubtask}>
                            
                        <input  type="text" placeholder="Add a subTask" name ="subTask" value={this.state.subTask} onChange={this.handleChange}/>
                        <input type="submit" hidden="True"/>
                </form>
            </div></div></div></div>);
    };
};
const mapStateToProps = (state) => {
    return{}
}
export default connect(mapStateToProps, {addSubtask})(AddSubTask);