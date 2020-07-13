import { createStore } from "redux";
import reducer from "./reducer";

// Creating store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Export it like default
export default store;
