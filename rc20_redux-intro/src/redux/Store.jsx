import {  combineReducers,legacy_createStore as createStore } from "redux";
import counterReducer from "./reducers/counterReducer";
import todoReducer from "./reducers/todoReducer";

const compReducer = combineReducers({

counterReducer:counterReducer,

todoReducer: todoReducer

})

export const store = createStore(compReducer);
