import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import { todoReducer } from "./Todo/todo.reducer"
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    todo: todoReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk) )