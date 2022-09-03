import React from 'react';
import './App.css';
import { RecoilRoot } from 'recoil';
import { TodoList } from "./components/TodoList";


function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <TodoList />

      </div>
    </RecoilRoot>
  );
}

export default App;
