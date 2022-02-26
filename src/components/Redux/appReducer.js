import { compose } from "redux"
import { DarkTheme } from "../Themes/DarkTheme"
import { LightTheme } from "../Themes/LightTheme"


const todoListState = {
    taskList: [
        {
            taskName: "ABCD",
            done: true // true: done, false: undone
        },
        {
            taskName: "12345",
            done: true // true: done, false: undone
        },
        {
            taskName: "2903480",
            done: true // true: done, false: undone
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
        
        case "ADD_TASK": {
            console.log(state)
            action.newTask.preventDefault();
            let cloneTaskList = [...state.taskList];
            let newTask = {taskName:action.newTask.target[0].value, done: true };
            cloneTaskList.push(newTask);
            action.newTask.target[0].value = ""
            return {...state, taskList:cloneTaskList }
        } break;
        case "CHECK": {
            console.log(state)
            let taskList = [...state.taskList]

            //console.log(cloneState === state)
            let index = taskList.findIndex(task => task.taskName === action.checkedTask.taskName);
            taskList[index].done = false;
            
            return { ...state, taskList };
        }; break;
        case "DELETE":{
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
