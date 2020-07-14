import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

// Creating store
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

// Export it like default
export default store;
