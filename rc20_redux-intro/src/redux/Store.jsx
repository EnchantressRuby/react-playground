import {  combineReducers,legacy_createStore as createStore } from "redux";
import counterReducer from "./reducers/CounterReducer";
import todoReducer from "./reducers/TodoReducer";

const topluReducer = combineReducers({

counterReducer:counterReducer,

todoReducer: todoReducer

})

export const store = createStore(topluReducer);
