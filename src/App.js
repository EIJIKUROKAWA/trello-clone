import { Header } from "./components/header/Header";
import { AddTaskCardButton } from "./components/task/button/AddTaskCardButton";

import { TaskCards } from "./components/task/TaskCards";


function App() {
  return <div className="app">
    <Header />
    <TaskCards />
  </div>;
}

export default App;
