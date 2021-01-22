import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

import { authentication } from "./Authentication/reducer";
import { users } from "./Users/reducer";

const loggerMiddleware = createLogger();

const rootReducer = combineReducers({
  authentication,
  users
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);
