import { createStore, applyMiddleware, compose } from "redux";
import middleware from "./middleware";
import reducer from "./reducer";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(middleware));

const store = createStore(reducer, enhancer);

export default store;
