import { combineReducers, createStore } from "redux";
import { appReducer, todosReducer} from "./reducers";

const rootReducer = combineReducers({
  appReducer, todosReducer
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);