import React from "react";
import Main from "./containers/Main/Main";

import "./App.css";
import HabitList from "./containers/HabitList/HabitList";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h2>HABIT APPLICATION</h2>
        <Main />
        <br />
        <HabitList />
      </div>
    </Provider>
  );
}


// TODO: Delete this after
// const unsubscribe = store.subscribe(() => {
//   console.log("Store changed", store.getState());
// });

export default App;