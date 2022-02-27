import { add_task_type, delete_task_type, edit_task_type, update_task_type } from "../ActionTypes/actionType"

export const addNewTask = (newTask)=>{
    return {
        type: add_task_type,
        newTask
    }
}

export const deleteTask = (task) =>{
    return {
        type: delete_task_type,
        removedTask: task
    }
}

export const editTask = (task)=>{
    return {
        type: edit_task_type,
        editedTask: task
    }
}

export const updateTask =(task)=>({
    type: update_task_type,
    updatedTask:task
})