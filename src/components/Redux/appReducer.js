import { compose } from "redux"
import { DarkTheme } from "../Themes/DarkTheme"
import { LightTheme } from "../Themes/LightTheme"
import { add_task_type, edit_task_type, update_task_type } from "./ActionTypes/actionType"


const todoListState = {
    taskList: [
        {
            id: 1,
            taskName: "ABCD",
            done: false // true: done, false: undone
        },
        {
            id: 2,
            taskName: "12345",
            done: false // true: done, false: undone
        },
        {
            id: 3,
            taskName: "2903480",
            done: false // true: done, false: undone
        },
    ],
    editedTask:  {
       // true: done, false: undone
    }

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
            
            let newTaskList  = [...state.taskList];
            newTaskList.push(action.newTask);
            return {...state,taskList:newTaskList};
        } break;
        case "CHECK": {
            
            let taskList = [...state.taskList]
            //console.log(cloneState === state)
            let index = taskList.findIndex(task => task.taskName === action.checkedTask.taskName);
            taskList[index].done = true;
            return { ...state, taskList };
        }; break;
        case "DELETE_TASK":{
            
            let taskList = [...state.taskList]

            //console.log(cloneState === state)
            let index = taskList.findIndex(task => task.taskName === action.removedTask.taskName);
            taskList.splice(index,1);
            return { ...state, taskList };
        };break;
        case edit_task_type:{
           // console.log(action)
            let index = state.taskList.findIndex(task => task.taskName === action.editedTask.taskName);
            let task  = state.taskList[index];
            //console.log(task);
            return {...state,editedTask:task}
        }
        case update_task_type:{
            console.log(action);
            let cloneTaskList = [...state.taskList]
            let index = state.taskList.findIndex(task=> task.id === action.updatedTask.id);
            cloneTaskList[index].taskName = action.updatedTask.taskName;
            console.log(cloneTaskList)
            console.log({...state,taskList:cloneTaskList});
            return {...state,taskList:cloneTaskList}
        }
        default: return { ...state }
    }
}
