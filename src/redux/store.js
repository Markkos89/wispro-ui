import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

import { authentication } from "./Authentication/reducer";
import { registration } from "./Registration/reducer";
import { users } from "./Users/reducer";
import { candidates } from "./Candidates/reducer";

const loggerMiddleware = createLogger();

const rootReducer = combineReducers({
  authentication,
  registration,
  candidates,
  users
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);
