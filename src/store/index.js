import { appReducer, todosReducer } from "./reducers";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: { appReducer, todosReducer },
});
