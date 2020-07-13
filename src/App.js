import React from 'react';
import Main from './containers/Main/Main';

import "./App.css";
import HabbitList from './containers/HabitList/HabitList';

function App() {
  return (
    <div className="App">
      <h2>Hello from App.js</h2>
      <Main />
      <br />
      <HabbitList />
    </div>
  );
}

export default App;
