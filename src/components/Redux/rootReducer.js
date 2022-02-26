import {combineReducers} from 'redux';
import { themeStateReducer, toDoListReducer } from './appReducer';

const rootReducer = combineReducers ({
    themeStateReducer : themeStateReducer,
    toDoStateReducer : toDoListReducer
})

export default rootReducer