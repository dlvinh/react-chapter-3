import { compose } from "redux"
import { DarkTheme } from "../Themes/DarkTheme"
import { LightTheme } from "../Themes/LightTheme"
import { add_task_type } from "./ActionTypes/actionType"


const todoListState = {
    taskList: [
        {
            taskName: "ABCD",
            done: false // true: done, false: undone
        },
        {
            taskName: "12345",
            done: false // true: done, false: undone
        },
        {
            taskName: "2903480",
            done: false // true: done, false: undone
        },
    ]

}
const toDoThemeState = {
    DarkTheme: true
}

export const themeStateReducer = (state = toDoThemeState, action) => {
    switch (action.type) {
        case "CHANGE_THEME":{
            let newTheme = {...state.DarkTheme};
            console.log(newTheme)
            if (state.DarkTheme){
                newTheme.DarkTheme = false;
            }else{
                newTheme.DarkTheme = true;
            }
            console.log(newTheme)
            return {...newTheme}
        }break;
        default: return { ...state }
    }
}
export const toDoListReducer = (state = todoListState, action) => {
    switch (action.type) {
        
        case add_task_type: {
            console.log(action) // Check what action is
            let newTaskList  = [...state.taskList];
            newTaskList.push(action.newTask);
            return {...state,taskList:newTaskList};
        } break;
        case "CHECK": {
            console.log(state)
            let taskList = [...state.taskList]
            //console.log(cloneState === state)
            let index = taskList.findIndex(task => task.taskName === action.checkedTask.taskName);
            taskList[index].done = true;
            return { ...state, taskList };
        }; break;
        case "DELETE_TASK":{
            console.log("asdlakj")
            let taskList = [...state.taskList]

            //console.log(cloneState === state)
            let index = taskList.findIndex(task => task.taskName === action.removedTask.taskName);
            taskList.splice(index,1);
            return { ...state, taskList };
        }
        default: return { ...state }
    }
}
