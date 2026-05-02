import { useState } from "react";
import './todo.css';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function ToDoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const clearAll = () => {
    setTodos([]);
  };

  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <div className="container">
      <div className="header">
        <h1>📝 Todo List</h1>
        <p className="stats">
          Completed: {completedCount} / {todos.length}
        </p>
      </div>

      <div className="input-container">
        <input
          type="text"
          className="todo-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
          placeholder="Add a new task..."
        />
        <button onClick={addTodo} className="add-btn">
          Add
        </button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={`todo-item ${todo.completed ? "completed" : ""}`}>
            <input
              type="checkbox"
              className="todo-checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            <span className="todo-text">{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)} className="delete-btn">Delete</button>
          </li>
        ))}
      </ul>

      {todos.length > 0 && <button onClick={clearAll} className="clear-all-btn">Clear All</button>}
    </div>
  );
}
  
export default ToDoList;