import React, { Component } from 'react'
import { Button } from './StyledComponents/Button'
import { Table, Tbody, Td, Th, Thead, Tr } from './StyledComponents/Table'
import { connect } from 'react-redux'
import { deleteTask } from './Redux/Actions/ActionList'
class TaskDone extends Component {

    renderTaskDone = () => {
        return this.props.taskList.filter(task => task.done).map((task, index) => {
            return <Td key={index} scope="row" className='d-flex justify-content-between'>
                <span style={{textDecoration:"line-through"}}>{task.taskName}</span>
                <div className='task-function-container'>
                    <Button className='ml-1'  onClick={this.props.onDeleteTask.bind(this,task)}><i className="fa fa-trash-alt"></i>Delete</Button>
                </div>
            </Td>
        })
    }
    render() {
        return (
            <div>
                <Table className="table">
                    <Tbody>
                        <Tr>
                            {this.renderTaskDone()}
                        </Tr>
                    </Tbody>
                </Table>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return { taskList: state.toDoStateReducer.taskList}
}
const mapDispatchToProps = (dispatch)=>{
    return {
        onDeleteTask: (task)=>{
            let action = deleteTask(task);
            console.log(action)
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskDone);