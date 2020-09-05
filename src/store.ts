import { robotsReducer } from "./robotsReducer";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
const logger = createLogger();

export const store = createStore(
  robotsReducer,
  applyMiddleware(thunkMiddleware, logger)
);
