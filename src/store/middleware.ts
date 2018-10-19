import { Middleware } from "redux";
import { ADD_NUMBER } from "./reducer";

const middleware: Middleware = ({ getState }) => next => action => {
  if (action.type === ADD_NUMBER) {
    // tslint:disable-next-line:no-console
    console.log(`adding ${action.payload} to ${getState()}`);
  }
  next(action);
};

export default middleware;
