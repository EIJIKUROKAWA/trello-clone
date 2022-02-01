import { Header } from "./components/header/Header";
import TodoList from "./components/ToDoList";


import { AddTaskCardButton } from "./components/task/button/AddTaskCardButton";

import { TaskCards } from "./components/task/TaskCards";


function App() {
  return <div className="app">
    <Header />
    <TaskCards />
  </div>;
}

export default App;
