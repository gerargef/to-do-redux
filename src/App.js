import "./App.css";
import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import TodoList from "./components/TodoList/TodoList";
function App() {
  return (
    <div className="App">
      <div className="container">
        <AddTodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
