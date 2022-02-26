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
class TodoPage extends Component {
    // darkTheme = {
    //     bgColor: '#343a40',
    //     color: '#fff',
    //     borderButton: '1px solid #fff',
    //     borderRadiusButton: 'none',
    //     hoverTextColor: '#343a40',
    //     hoverBgColor: '#fff',
    //     borderColor: '#343a40'
    // }

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
                            <form onSubmit={this.props.onAddNewTask}>
                                <Input className='w-50' required name="toDoTask"></Input>
                                <Button className='ml-2' type='submit'><i className="fa fa-plus"></i> Add Task </Button>
                                <Button className='ml-1'><i className="fa fa-upload"></i> Upload Task </Button>
                            </form>

                        </div>
                        <hr style={{ borderColor: 'white' }} />
                        <h2>TO DO LIST </h2>
                        <ToDoTask></ToDoTask>
                        <hr style={{ borderColor: 'white' }} />
                        <h2>TASK DONE</h2>
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
        onAddNewTask: (event) => {

            let action = {
                type: "ADD_TASK",
                newTask: event,
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage)