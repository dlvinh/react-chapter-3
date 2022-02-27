import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { Button } from './StyledComponents/Button'
import { ContainerFluid, Container } from './StyledComponents/Container'
// import { Table, Tbody, Td, Th, Thead, Tr } from './StyledComponents/Table'
import { Label, Input, TextField } from './StyledComponents/TextGroup'
import { connect } from 'react-redux';
import ToDoTask from './ToDoTask'
import TaskDone from './TaskDone'
import { DarkTheme } from './Themes/DarkTheme'
import { LightTheme } from './Themes/LightTheme'
import Modal from './Modal'
import { addNewTask } from './Redux/Actions/ActionList'
class TodoPage extends Component {

    state = {
        taskName: ""
    }

    render() {
        console.log(this.props.themeState)
        return (
            <div>
                <ThemeProvider theme={this.props.themeState ? DarkTheme : LightTheme} >
                    <Container className="container mt-4 text-left">
                        <header className='d-flex justify-content-between'>
                            <h1 >PLAN YOUR DAY HERE </h1>
                            <Button className='btn-theme-change' onClick={this.props.onChangeTheme} >
                                {this.props.themeState ? <i className="fa fa-sun"> Light</i> : <i className="fa fa-moon"> Dark</i>}</Button></header>
                        <Label>New Task</Label>
                        <br></br>
                        <div className='align-top'>

                            <Input className='w-50' required name="taskName" onChange={(e)=>{
                                // Need this to update local State of text box so that Button can get the entered data and pass to event
                                this.setState({
                                    taskName: e.target.value
                                })

                            }}></Input>
                            <Button className='ml-2' onClick={this.props.onAddNewTask.bind(this,this.state.taskName)}><i className="fa fa-plus"></i> Add Task </Button>
                            <Button className='ml-1'><i className="fa fa-upload"></i> Upload Task </Button>


                        </div>
                        <hr style={{ borderColor: 'white' }} />
                        <h2>TO DO LIST </h2>
                        <ToDoTask></ToDoTask>
                        <hr style={{ borderColor: 'white' }} />
                        <h2>COMPLETED TASK</h2>
                        <TaskDone></TaskDone>
                    </Container>
                    {/* <Modal></Modal> */}
                </ThemeProvider>




            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        themeState: state.themeStateReducer.DarkTheme,
        toDoState: state.toDoStateReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onChangeTheme: () => {
            let action = {
                type: "CHANGE_THEME",
            }
            dispatch(action);
        },
        onAddNewTask: (task) => {
            let newTask = {
                taskName: task,
                done:false
            }
            let action = addNewTask(newTask) // addNewTask is a function in ActionList.js which return an object {type, newTask} 
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage)