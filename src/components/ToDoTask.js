import React, { Component } from 'react'
import { Button } from './StyledComponents/Button'
import { Table, Tbody, Tr, Td } from './StyledComponents/Table'
import { connect } from 'react-redux'
import Modal from './Modal'

class ToDoTask extends Component {
    renderTask = () => {
        return this.props.taskList.filter(task => task.done).map((task, index) => {
            return <Td key={index} scope="row" className='d-flex justify-content-between'>
                {task.taskName}
                <div className='task-function-container'>
                    <Button className='ml-1'  onClick={this.props.onCheckTask.bind(this,task)}><i className="fa fa-check"></i> Check</Button>
                    <Button className='ml-1' data-toggle="modal" data-target="#editTaskModal" onClick={(e)=>{
                        console.log(e)
                            return <Modal></Modal>
                    }}> <i className="fa fa-edit"></i> Edit</Button>
                    <Button className='ml-1' onClick={this.props.onDeleteTask.bind(this,task)}><i className="fa fa-trash-alt"></i> Delete</Button>
                </div>
            </Td>
        })
    }
    render() {
        console.log(this.props.taskList)
        return (
            <div>
                <Table className="table">
                    <Tbody>
                        <Tr>
                            {this.renderTask()}
                        </Tr>
                    </Tbody>
                </Table>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCheckTask: (task) => {
            let action = {
                type: "CHECK",
                checkedTask: task
            }
            dispatch(action);
        },
        onDeleteTask: (task)=>{
            let action ={
                type:"DELETE",
                removedTask: task
            }
            dispatch(action);
        }
    }
}
const mapStateToProps = (state) => {
        return {taskList : state.toDoStateReducer.taskList}
    }
    export default connect(mapStateToProps, mapDispatchToProps)(ToDoTask);