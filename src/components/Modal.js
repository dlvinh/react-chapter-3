import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateTask } from './Redux/Actions/ActionList'
import { Button } from './StyledComponents/Button'
import { ModalContainer } from './StyledComponents/ModalContainer'
import { Input, TextField } from './StyledComponents/TextGroup'

class Modal extends Component {

    state = {
        id: "",
        taskName: "",
        done: "",
    }
    // because of static => cant use "this"
    // static getDerivedStateFromProps =(newProps,curState)=>{
    //     // let propsValue = this.props.editTask.taskName
    //     // this.setState({
    //     //     prevTask: propsValue
    //     // })
    //     let newState = curState;

    //     console.log(curState,newProps)
    // }
    render() {
        console.log("curState",this.state)
        return (
            <div>
                <div className="modal fade" id="editTaskModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <ModalContainer className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Edit Task</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <Input value={this.state.taskName} onChange={(e) => {
                                    this.setState({
                                        ...this.state,
                                        taskName: e.target.value
                                    })
                                }}></Input>
                            </div>
                            <div className="modal-footer">
                                <Button type="button" className="btn btn-secondary" data-dismiss="modal" >Close</Button>
                                <Button type="button" data-dismiss="modal" onClick={this.props.onUpdateTask.bind(this,this.state)}>Save changes</Button>
                            </div>
                        </ModalContainer>
                    </div>
                </div>
            </div>
        )
    }

    componentDidUpdate = (prevProps, prevState) => {
        // console.log({ prevProps, prevState })
        if (this.props.editTask.id !== prevState.id) {
            this.setState({
                id:this.props.editTask.id,
                taskName: this.props.editTask.taskName,
                done: this.props.editTask.done
            },()=>{
                console.log("diupdate",{ prevProps, prevState })
            })
        }
        console.log("life cycle",{ prevProps, prevState })
    }
}

const mapStateToProps = (state) => {
    return {
        editTask: state.toDoStateReducer.editedTask
    }
}

const mapDispatchToProps =(dispatch)=>{
    return {
        onUpdateTask:(task)=>{
            let newTask = task;
            let action = updateTask(newTask);
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Modal);
